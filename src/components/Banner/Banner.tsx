import classNames from "classnames";

import { EBannerTypes } from "./Banner.enums";
import Phone from "../../../public/common/phone.png";
import Text from "../Text/Text";

import { TextTypeEnum, TextWeightEnum } from "../Text/Text.types";
import { BannerProps } from "./Banner.types";

import styles from "./Banner.module.scss";

const Banner: React.FC<BannerProps> = ({ type, imgSrc, title, text }) => {
  return (
    <section>
      {(type === EBannerTypes.COLUMNS && (
        <div
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
          className={styles.columns}
        >
          <div className={classNames(styles.content, "flexColumn")}>
            <Text variant={TextTypeEnum.h2} weight={TextWeightEnum.extra_bold}>
              {title}
            </Text>
            <Text
              variant={TextTypeEnum.body_m}
              weight={TextWeightEnum.semi_bold}
            >
              {text}
            </Text>
          </div>
          <div>
            <img src={Phone} alt="" />
          </div>
        </div>
      )) ||
        (type === EBannerTypes.BLOCK && (
          <div
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
            className={styles.block}
          >
            <div className={classNames(styles.infoText, "flexColumn")}>
              <Text variant={TextTypeEnum.h2} weight={TextWeightEnum.bold}>
                {title}
              </Text>
              <Text variant={TextTypeEnum.body_m}>{text}</Text>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Banner;
