import React from "react";
import styles from "./form.module.css";
import { CgProfile } from "react-icons/cg";

export const Form = ({ handleSubmit }) => {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form className={styles.body} onSubmit={(e) => onSubmit(e)}>
      <div className={styles.bodyHead}>
        <div className={styles.avatar}>
          <CgProfile />
        </div>
        <textarea
          placeholder="Add a comment"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={styles.bodyFooter}>
        <button className={styles.btn}>Post</button>
      </div>
    </form>
  );
};

export default Form;
