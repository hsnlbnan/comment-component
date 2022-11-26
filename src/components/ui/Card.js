import classNames from "classnames";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FcDislike, FcLike } from "react-icons/fc";
import { VscReply } from "react-icons/vsc";

import styles from "./Card.module.css";
import Form from "./form";

export const Card = ({
  comment,
  likeHandler,
  dislikeHandler,
  replyHandler,
  className,
  subComment,
}) => {
  const [replyOpen, setReplyOpen] = React.useState(false);

  const handleReply = () => {
    setReplyOpen((prev) => !prev);
  };

  return (
    <>
      <div key={comment.id} className={classNames(styles.comment, className)}>
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
          {!subComment && (
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
          )}
        </div>

        {replyOpen && <Form onSubmit={(e) => replyHandler(e, comment.id)} />}
      </div>

      {comment.comments &&
        comment.comments.map((comment) => (
          <Card
            key={comment.id}
            comment={comment}
            subComment={true}
            className={styles.subComment}
          />
        ))}
    </>
  );
};

export default Card;
