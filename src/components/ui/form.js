import React from "react";
import styles from "./form.module.css";
import { CgProfile } from "react-icons/cg";

export const Form = ({ onSubmit }) => {
  return (
    <form className={styles.body} onSubmit={onSubmit}>
      <div className={styles.bodyHead}>
        <div className={styles.avatar}>
          <CgProfile />
        </div>
        <textarea placeholder="Add a comment" />
      </div>
      <div className={styles.bodyFooter}>
        <button className={styles.btn}>Post</button>
      </div>
    </form>
  );
};

export default Form;
