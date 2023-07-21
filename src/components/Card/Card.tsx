import React from "react";

import { CardProps } from "./Card.types";

import styles from "./Card.module.scss";

const Card: React.FC<CardProps> = ({
  date = "30/10/2023",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,eaque!",
  imgSource = "https://media.istockphoto.com/id/1289481257/photo/a-crowded-concert-hall-with-scene-stage-lights-rock-show-performance-with-people-silhouette.jpg?s=612x612&w=0&k=20&c=oNtQEaTIP-R83fnm8gIdmwBkzfncgoK4GljODaGK56k=",
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={imgSource} alt="" />
      </div>
      <div className={styles.content}>
        <p>{description}</p>
        <div className={"flexbox"}>
          <p>{date}</p>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
