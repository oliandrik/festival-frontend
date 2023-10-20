import Banner from "../../components/Banner/Banner";
import { EBannerTypes } from "../../components/Banner/Banner.enums";
import Intro from "../../components/Intro/Intro";
import { Banners } from "../../constants/banner-text";

const Home = () => {
  return (
    <div>
      <Intro />
      <Banner
        type={EBannerTypes.COLUMNS}
        imgSrc={Banners.InfoPhone.imgSrc}
        title={Banners.InfoPhone.title}
        text={Banners.InfoPhone.text}
      />
      <Banner
        type={EBannerTypes.BLOCK}
        imgSrc={Banners.InfoConcert.imgSrc}
        title={Banners.InfoConcert.title}
        text={Banners.InfoConcert.text}
      />
      <Banner
        type={EBannerTypes.BLOCK}
        imgSrc={Banners.Newsletter.imgSrc}
        title={Banners.Newsletter.title}
        text={Banners.Newsletter.text}
      />
    </div>
  );
};

export default Home;
