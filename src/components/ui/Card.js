import classNames from "classnames";
import React from "react";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { FcDislike, FcLike } from "react-icons/fc";
import { VscReply } from "react-icons/vsc";

import styles from "./Card.module.css";
import Form from "./form";

export const Card = ({
  comment,
  likeHandler,
  dislikeHandler,
  parentId = null,
  className,
  childComment,
  commentHandler,
  customStyle,
}) => {
  const [replyOpen, setReplyOpen] = React.useState(false);

  const handleReply = () => {
    setReplyOpen((prev) => !prev);
  };

  const replyId = parentId ? parentId : comment.id;

  return (
    <>
      <motion.div
        key={comment.id}
        className={classNames(styles.comment, className)}
        style={customStyle}
      >
        <div>
          <div className={styles.commentTop}>
            <div className={styles.commentHead}>
              <div className={styles.avatar}>
                <CgProfile />
              </div>
              <div className={styles.name}>{comment.name}</div>
            </div>
            <div className={styles.commentBody}>{comment.comment}</div>
          </div>

          <div className={styles.commentFooter}>
            <button
              className={styles.btnLink}
              onClick={() => likeHandler(comment.id)}
            >
              <FcLike />
              <span>{comment.like}</span>
            </button>
            <button
              className={styles.btnLink}
              onClick={() => dislikeHandler(comment.id)}
            >
              <FcDislike />
              <span> {comment.dislike}</span>
            </button>
            <button className={styles.btnLink} onClick={() => handleReply()}>
              <VscReply />
            </button>
          </div>
        </div>

        {replyOpen && <Form handleSubmit={(e) => commentHandler(e, replyId)} />}
      </motion.div>

      {childComment &&
        childComment.length > 0 &&
        childComment.map((c, i) => (
          <Card
            key={Math.random(0, 100000)}
            comment={
              c.parentId === comment.id
                ? c
                : childComment.filter((c) => c.parentId === comment.id)
            }
            likeHandler={likeHandler}
            dislikeHandler={dislikeHandler}
            commentHandler={commentHandler}
            className={styles.subComment}
            parentId={comment.id}
            childComment={[]}
            customStyle={{ marginLeft: (i + 1) * 20 }}
            // childComment={childComment(c.id)}
          />
        ))}
    </>
  );
};

export default Card;
