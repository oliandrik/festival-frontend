import Banner from "../../components/Banner/Banner";
import { EBannerTypes } from "../../components/Banner/Banner.enums";
import Intro from "../../components/Intro/Intro";
import Concert from "../../../public/backgrounds/concert_bg.png";
import Newsletter from "../../../public/backgrounds/newsletter_bg.png";
import Violet from "../../../public/backgrounds/violet.png";

const Home = () => {
  return (
    <div>
      <Intro />
      <Banner
        type={EBannerTypes.COLUMNS}
        imgSrc={Violet}
        title="Have your ticket on your phone"
        text="Lorem ipsum dolor sit amet consectetur. Odio viverra imperdiet mi
              eget fusce fermentum turpis."
      />
      <Banner
        type={EBannerTypes.BLOCK}
        imgSrc={Concert}
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet consectetur. Convallis elit dignissim
                amet vitae. Ut ac tellus porttitor facilisi. Tincidunt semper
                rutrum pellentesque in odio lacus eu. Posuere a ipsum."
      />
      <Banner
        type={EBannerTypes.BLOCK}
        imgSrc={Newsletter}
        title="Get our newsletter"
        text="Subscribe to our newsletter and never miss out latest news"
      />
    </div>
  );
};

export default Home;
