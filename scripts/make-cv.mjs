/*
  Prints the built /cv page to public/Andi-Basha-CV.pdf with a headless
  Chromium-based browser, so the PDF always matches the site's content.

  Run through `npm run cv` (which builds first). Set BROWSER_PATH if Edge or
  Chrome is installed somewhere unusual.
*/
import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const pdfName = "Andi-Basha-CV.pdf";
const target = path.join(root, "public", pdfName);

const candidates = [
  process.env.BROWSER_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/usr/bin/microsoft-edge",
].filter(Boolean);

const browser = candidates.find((file) => fs.existsSync(file));

if (!browser) {
  console.error("No Chrome or Edge found. Set BROWSER_PATH to its executable.");
  process.exit(1);
}

if (!fs.existsSync(path.join(outDir, "cv", "index.html"))) {
  console.error("out/cv/index.html is missing. Run `npm run build` first.");
  process.exit(1);
}

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
};

/* A minimal static server for the exported site. */
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  let file = path.join(outDir, urlPath);

  if (!file.startsWith(outDir)) {
    res.writeHead(403).end();
    return;
  }

  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    file = path.join(file, "index.html");
  }

  if (!fs.existsSync(file)) {
    res.writeHead(404).end();
    return;
  }

  res.writeHead(200, {
    "Content-Type": types[path.extname(file)] ?? "application/octet-stream",
  });
  fs.createReadStream(file).pipe(res);
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.rmSync(target, { force: true });

/*
  A throwaway profile keeps the headless run separate from any browser window
  that is already open; without it Edge hands the job to that window and hangs.
*/
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "cv-browser-"));

/*
  The browser must run asynchronously: a blocking spawn would also block the
  static server above, and the page would never load.
*/
const exitCode = await new Promise((resolve) => {
  const child = spawn(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-pdf-header-footer",
      "--virtual-time-budget=5000",
      `--user-data-dir=${profile}`,
      `--print-to-pdf=${target}`,
      `http://127.0.0.1:${port}/cv/`,
    ],
    { stdio: "ignore" },
  );
  const timer = setTimeout(() => child.kill(), 90_000);
  child.on("exit", (code) => {
    clearTimeout(timer);
    resolve(code);
  });
  child.on("error", () => {
    clearTimeout(timer);
    resolve(1);
  });
});

server.close();
fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });

if (exitCode !== 0 || !fs.existsSync(target)) {
  console.error("The browser did not produce a PDF.");
  process.exit(1);
}

/* Keep the already-built export in step, so `npm start` serves the new file. */
fs.copyFileSync(target, path.join(outDir, pdfName));

const kb = Math.round(fs.statSync(target).size / 1024);
console.log(`Wrote public/${pdfName} (${kb} KB)`);
