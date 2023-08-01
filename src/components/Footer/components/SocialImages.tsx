import ImageSquare from "../../ImageSquare/ImageSquare";

import { FooterProps } from "../Footer.types";

import styles from "../Footer.module.scss";

const SocialImages: React.FC<FooterProps> = ({ images }) => {
  return (
    <div className={styles.socialImages}>
      {images?.map((item) => {
        return <ImageSquare key={item.id} imgSource={item.imgSource} />;
      })}
    </div>
  );
};

export default SocialImages;
