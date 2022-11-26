import React from "react";
import styles from "./comments.module.css";

import Form from "../ui/form";
import Card from "../ui/Card";
export const Comment = ({ commentsOpen }) => {
  const [comments, setComments] = React.useState([
    {
      id: 1,
      name: "John Doe",
      comment: "This is a comment",
      parentId: null,
      like: 0,
      dislike: 0,
    },
    {
      id: 2,
      name: "Jane Doe",
      comment: "This is another comment",
      parentId: null,
      like: 0,
      dislike: 0,
    },
  ]);

  const commentHandler = (text, parentId) => {
    // console.log("eeeee", text, parentId);
    console.log("2322322", text, parentId);
    const newComment = {
      id: Math.floor(Math.random() * 1000),
      name: "Jane Doe",
      comment: text,
      parentId: parentId ? parentId : null,
      like: 0,
      dislike: 0,
    };
    setComments([...comments, newComment]);
  };

  const likeHandler = (id) => {
    const newComments = comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          like: comment.like + 1,
        };
      }
      return comment;
    });
    setComments(newComments);
  };

  const dislikeHandler = (id) => {
    const newComments = comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          dislike: comment.dislike + 1,
        };
      }
      return comment;
    });

    setComments(newComments);
  };

  const rootComment = comments.filter((c) => c.parentId === null);

  const childComment = (commentId) =>
    comments.filter((c) => c.parentId === commentId);

  return (
    commentsOpen && (
      <>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h5>Comments ({comments.length})</h5>
          </div>
          <Form handleSubmit={commentHandler} />
          {rootComment.map((comment) => (
            <Card
              key={comment.id}
              comment={comment}
              likeHandler={likeHandler}
              dislikeHandler={dislikeHandler}
              commentHandler={commentHandler}
              childComment={childComment(comment.id)}
            />
          ))}
        </div>
      </>
    )
  );
};

export default Comment;
