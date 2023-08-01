import React from "react";

import { SocialLinkProps } from "./SocialLink.types";

import styles from "./SocialLink.module.scss";

const SocialLink: React.FC<SocialLinkProps> = ({ imgSource, text, link }) => {
  return (
    <div className={styles.socialLink}>
      <img src={imgSource} alt={text} />
      {link ? <a href={link}>{text}</a> : <p>{text}</p>}
    </div>
  );
};

export default SocialLink;
