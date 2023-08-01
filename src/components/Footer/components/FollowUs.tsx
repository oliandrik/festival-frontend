import SocialImages from "./SocialImages";
import SocialLink from "../../SocialLink/SocialLink";

import { FooterProps } from "../Footer.types";

import styles from "../Footer.module.scss";

const FollowUs: React.FC<FooterProps> = ({ socialLinks, images }) => {
  return (
    <div className={(styles.followUs, "flexbox")}>
      <div className={styles.socialLinks}>
        {socialLinks?.map((item) => {
          return (
            <SocialLink
              key={item.id}
              imgSource={item.imgSource}
              text={item.text}
              link={item.link}
            />
          );
        })}
      </div>

      <SocialImages images={images} />
    </div>
  );
};

export default FollowUs;
