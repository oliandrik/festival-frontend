import classNames from "classnames";

import Copyright from "./components/Copyright";
import FollowUs from "./components/FollowUs";
import { Images, SocialLinks } from "../../constants/footer";

import { FooterProps } from "./Footer.types";

import styles from "./Footer.module.scss";

const Footer: React.FC<FooterProps> = ({
  socialLinks = SocialLinks,
  images = Images,
}) => {
  return (
    <div className={classNames(styles.footer)}>
      <div className={classNames(styles.innerFooter, "flexbox")}>
        <Copyright />
        <div className={styles.followUs}>
          <p>Follow us</p>
          <FollowUs socialLinks={socialLinks} images={images} />
        </div>
        <div>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
