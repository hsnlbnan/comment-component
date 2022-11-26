import React from "react";
import { TfiComment } from "react-icons/tfi";
import styles from "./review.module.css";

export const Review = ({ setCommentsOpen }) => {
  const handleOnclick = () => {
    setCommentsOpen((prev) => !prev);
  };
  return (
    <div className={styles.wrapper}>
      <div onClick={handleOnclick}>
        <TfiComment />
        Comments
      </div>
      <div>Review ...</div>
    </div>
  );
};

export default Review;
