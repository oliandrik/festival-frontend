import { ReactNode } from "react";

export enum TextTypeEnum {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  caption = "caption",
  sub_m = "subtitle_medium",
  sub_s = "subtitle_small",
  body_m = "body_medium",
  body_l = "body_large",
}

export enum TextWeightEnum {
  light = "light",
  regular = "regular",
  semi_bold = "semi_bold",
  bold = "bold",
  extra_bold = "extra_bold",
}

export type TextProps = {
  children: ReactNode;
  variant: TextTypeEnum;
  weight?: TextWeightEnum;
  style?: React.CSSProperties;
};
