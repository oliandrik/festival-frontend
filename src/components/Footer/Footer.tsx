import classNames from "classnames";

import Copyright from "./components/Copyright";
import FollowUs from "./components/FollowUs";
import { Contacts, Images, SocialLinks } from "../../constants/footer";
import SocialLink from "../SocialLink/SocialLink";
import Text from "../Text/Text";

import { TextTypeEnum, TextWeightEnum } from "../Text/Text.types";
import { FooterProps } from "./Footer.types";

import styles from "./Footer.module.scss";

const Footer: React.FC<FooterProps> = ({
  socialLinks = SocialLinks,
  images = Images,
  contacts = Contacts,
}) => {
  return (
    <div className={classNames(styles.footer)}>
      <div className={classNames(styles.innerBlock)}>
        <Copyright />
        <div className={styles.followUs}>
          <Text
            variant={TextTypeEnum.h3}
            weight={TextWeightEnum.bold}
            style={{ marginBottom: "28px" }}
          >
            Follow us
          </Text>
          <FollowUs images={images} socialLinks={socialLinks} />
        </div>
        <div className={styles.contactUs}>
          <Text
            variant={TextTypeEnum.h3}
            weight={TextWeightEnum.bold}
            style={{ marginBottom: "28px" }}
          >
            Contact us
          </Text>
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
