/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const LightAndDarkMode = () => {
  const styles = {
    lightAndDarkMode: css`
      margin-left: auto;
      padding: 2px;
      position: relative;
      width: 40px;
      height: 20px;
      border-radius: 160px;
      background-color: #f0f0f0;
      transition: 0ms.5s;
      box-shadow: inset 0 8px 60px rgba(0, 0, 0, 0.1),
        inset 0 8px 8px rgba(0, 0, 0, 0.1), inset 0 -4px 4px rgba(0, 0, 0, 0.1);
    `,
    indicator: css`
      position: absolute;
      top: 1.5px;
      left: 2px;
      width: 18px;
      height: 18px;
      background: linear-gradient(to bottom, #f0f0f0, #acabab);
      border-radius: 50%;
      border: 1px solid #fff;
      transform: scale() (0.9);
      box-shadow:
        inset 0 4px 4px rgba(255, 255, 255, 0.2),
        inset 0 -4px 4px rgba(255, 255, 255, 0.2);
    `,
  };

  return (
    <div css={styles.lightAndDarkMode}>
      <i css={styles.indicator}></i>
    </div>
  );
};

export default LightAndDarkMode;
