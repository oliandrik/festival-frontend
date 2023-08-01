import classNames from "classnames";

import { TextProps } from "./Text.types";

import styles from "./Text.module.scss";

const Text: React.FC<TextProps> = ({
  children,
  variant,
  weight = "regular",
  style,
}) => {
  return (
    <span
      style={style}
      className={classNames(styles.text, {
        [styles[`text_variant_${variant}`]]: variant,
        [styles[`text_weight_${weight}`]]: weight,
      })}
    >
      {children}
    </span>
  );
};

export default Text;
