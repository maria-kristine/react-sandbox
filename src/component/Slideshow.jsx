/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Slider from "react-slick";

const Slideshow = () => {
  const styles = {
    slideShow: css`
      width: 850px;
      margin: 20px auto 30px auto;
      & button::before {
        color: #9ec4dc;
      }
      & img {
        width: 850px;
        height: 350px;
      }
    `,
    slider: css``,
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
      <Slider css={styles.slider} {...settings}>
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
