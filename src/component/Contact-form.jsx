/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const navigate = useNavigate();

 const handleClick = () => {
     navigate("/thanks")
 }
  const styles = {
    contactForm: css``,
    label: css`
      text-align: left;
      display: block;
    `,
    input: css`
      width: 100%;
      padding: 6px 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      box-sizing: border-box;
      display: block;
    `,
    textarea: css`
      width: 100%;
      height: 100px;
      padding: 6px 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      box-sizing: border-box;
      display: block;
      resize: none;
    `,
    button: css`
      background: #9ec4dc;
      color: #fff;
      border: 0;
      padding: 8px 30px;
      border-radius: 8px;
      cursor: pointer;
    `,
  };
  return (
    <form onSubmit={handleClick}>
      <label css={styles.label}>
        First name:
        <input css={styles.input} type="text" required />
      </label>
      <label css={styles.label}>
        Last name:
        <input css={styles.input} type="text" required />
      </label>
      <label css={styles.label}>
        Email:
        <input css={styles.input} type="text" required />
      </label>
      <label css={styles.label}>
        Message:
        <textarea css={styles.textarea} required></textarea>
      </label>
      <button type="submit" css={styles.button}>Send</button>
    </form>
  );
};

export default ContactForm;
