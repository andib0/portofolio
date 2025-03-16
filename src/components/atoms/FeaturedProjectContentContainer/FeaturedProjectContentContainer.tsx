import React, { FC } from "react";
import styles from "./FeaturedProjectContentContainer.module.css";
import FeaturedProjectTitle from "../FeaturedProjectTitle/FeaturedProjectTitle";
import FeaturedProjectDescription from "../FeaturedProjectDescription/FeaturedProjectDescription";
import FeaturedProjectStack from "../FeaturedProjectStack/FeaturedProjectStack";

interface FeaturedProjectContentContainerProps {
  title: string;
  description: string;
  stack: string[];
}

const FeaturedProjectContentContainer: FC<
  FeaturedProjectContentContainerProps
> = ({ title, description, stack }) => {
  return (
    <div className={styles.container}>
      <FeaturedProjectTitle title={title} />
      <FeaturedProjectDescription description={description} />
      <FeaturedProjectStack stack={stack} />
    </div>
  );
};

export default FeaturedProjectContentContainer;
