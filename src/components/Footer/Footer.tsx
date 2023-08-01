import classNames from "classnames";

import Copyright from "./components/Copyright";
import FollowUs from "./components/FollowUs";
import { Contacts, Images, SocialLinks } from "../../constants/footer";
import SocialLink from "../SocialLink/SocialLink";

import { FooterProps } from "./Footer.types";

import styles from "./Footer.module.scss";

const Footer: React.FC<FooterProps> = ({
  socialLinks = SocialLinks,
  images = Images,
  contacts = Contacts,
}) => {
  return (
    <div className={classNames(styles.footer)}>
      <div className={classNames(styles.innerFooter, "flexbox")}>
        <Copyright />
        <div className={styles.followUs}>
          <p>Follow us</p>
          <FollowUs images={images} socialLinks={socialLinks} />
        </div>
        <div>
          <p>Contact us</p>
          {contacts.map((item) => {
            return (
              <SocialLink
                key={item.id}
                imgSource={item.imgSource}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Footer;
