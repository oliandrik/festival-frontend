import React from "react";

import { SocialLinkProps } from "./SocialLink.types";

import styles from "./SocialLink.module.scss";

const SocialLink: React.FC<SocialLinkProps> = ({ imgSource, text, link }) => {
  return (
    <div className={styles.socialLink}>
      <img src={imgSource} alt={text} />
      <a href={link}>{text}</a>
    </div>
  );
};

export default SocialLink;
