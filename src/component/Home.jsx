/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Slideshow from "./Slideshow";

const Home = () => {

    const styles = {
        home: css`
        & h2{
            text-align: center;
            font-size: 2rem;
            padding: 20px 0;
        }

        & p{
            padding: 0 30px 10px 30px;
            text-align: justify;
        }
        `,
    }
  return (
    <div css={styles.home}>
      <Slideshow />
      <h2>Sandbox</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        tempore fuga voluptatem atque, mollitia temporibus libero ducimus.
        Placeat deserunt, voluptatum molestiae, cumque at quod neque velit iure
        sapiente adipisci ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        tempore fuga voluptatem atque, mollitia temporibus libero ducimus.
        Placeat deserunt, voluptatum molestiae, cumque at quod neque velit iure
        sapiente adipisci ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        tempore fuga voluptatem atque, mollitia temporibus libero ducimus.
        Placeat deserunt, voluptatum molestiae, cumque at quod neque velit iure
        sapiente adipisci ducimus.
      </p>
    </div>
  );
};

export default Home;
