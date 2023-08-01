export type FooterProps = {
  socialLinks?: SocialLink[];
  images?: Image[];
};

export interface SocialLink {
  id: number;
  text: string;
  link: string;
  icon: string;
}

export interface Image {
  id: number;
  imgSource: string;
}
