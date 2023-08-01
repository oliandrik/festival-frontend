export type FooterProps = {
  socialLinks?: SocialLink[];
  images?: Image[];
  contacts?: Contact[];
};

export interface SocialLink {
  id: number;
  text: string;
  link: string;
  imgSource: string;
}

export interface Image {
  id: number;
  imgSource: string;
}

export interface Contact {
  id: number;
  text: string;
  imgSource: string;
}
