/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactForm = () => {
  const schema = yup
    .object({
      firstName: yup
        .string()
        .required("Please enter your first name")
        .matches(/^[A-Za-z ]+$/i, "MUST be letters"),
      lastName: yup
        .string()
        .required("Please enter your last name")
        .matches(/^[A-Za-z" "]+$/i, "Must "),
      email: yup
        .string()
        .email()
        .required("Please enter a valid email address."),
      age: yup
        .number()
        .positive()
        .min(18, "You must be over 18 years")
        .max(99, "You need to be under 99 year")
        .integer()
        .required("Please add your age")
        .typeError("Please add your age, it must be a number"),
      textarea: yup.string().required("Please write a message").min(10),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/thanks");
  };

  const styles = {
    contactForm: css``,
    label: css`
      text-align: left;
      display: block;
      & p {
        color: red;
        font-size: 0.75rem;
        margin-bottom: 10px;
      }
    `,
    input: css`
      width: 100%;
      padding: 6px 10px;
      outline: none;
      border: 1px solid #ddd;
      box-sizing: border-box;
      display: block;
      border-radius: 8px;
      background-color: #fafafa;
    `,
    textarea: css`
      width: 100%;
      height: 100px;
      padding: 6px 10px;
      outline: none;
      border: 1px solid #ddd;
      box-sizing: border-box;
      display: block;
      resize: none;
      border-radius: 8px;
      background-color: #fafafa;
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label css={styles.label}>
        First name:
        <input css={styles.input} type="text" {...register("firstName")} />
        {errors.firstName?.message ? <p>{errors.textarea?.message}</p> : <p>&nbsp;</p>}
      </label>
      <label css={styles.label}>
        Last name:
        <input css={styles.input} type="text" {...register("lastName")} />
        {errors.lastName?.message ? <p>{errors.textarea?.message}</p> : <p>&nbsp;</p>}
      </label>
      <label css={styles.label}>
        Email:
        <input css={styles.input} type="text" {...register("email")} />
        {errors.email?.message ? <p>{errors.textarea?.message}</p> : <p>&nbsp;</p>}
      </label>
      <label css={styles.label}>
        Age:
        <input css={styles.input} type="number" {...register("age")} />
        {errors.age?.message ? <p>{errors.textarea?.message}</p> : <p>&nbsp;</p>}
      </label>
      <label css={styles.label}>
        Message:
        <textarea css={styles.textarea} {...register("textarea")}></textarea>
        {errors.textarea?.message ? <p>{errors.textarea?.message}</p> : <p>&nbsp;</p>}
      </label>

      <button type="submit" css={styles.button}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
