/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Slider from "react-slick";

const Slideshow = () => {
  const styles = {
    slideShow: css`
      width: 850px;
      margin: 0 auto;
      margin-bottom: 30px;
      & img {
        width: 850px;
        height: 350px;
      }
    `,
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div css={styles.slideShow}>
      <Slider {...settings}>
        <div>
          <img src="images/sand_1.jpg" alt="" />
        </div>
        <div>
          <img src="images/sand_2.jpg" alt="" />
        </div>
        <div>
          <img src="images/sand_3.jpg" alt="" />
        </div>
        <div>
          <img src="images/sand_4.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
