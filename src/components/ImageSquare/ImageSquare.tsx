import React from "react";

import { ImageSquareProps } from "./ImageSquare.types";

import styles from "./ImageSquare.module.scss";

const ImageSquare: React.FC<ImageSquareProps> = ({ imgSource }) => {
  return (
    <div className={styles.imageBlock}>
      <img src={imgSource} alt="" />
    </div>
  );
};

export default ImageSquare;
