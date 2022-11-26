import React from "react";
import styles from "./comments.module.css";

import Form from "../ui/form";
import Card from "../ui/Card";
export const Comment = ({ commentsOpen }) => {
  const [comments, setComments] = React.useState([
    {
      id: Math.floor(Math.random() * 1000),
      name: "John Doe",
      comment: "This is a comment",
      like: 0,
      dislike: 0,
      comments: [
        {
          id: Math.floor(Math.random() * 1000),
          name: "John Doe",
          comment: "This is a comment",
          like: 0,
          dislike: 0,
          comments: [
            {
              id: Math.floor(Math.random() * 1000),
              name: "John Doe",
              comment: "This is a comment",
              like: 0,
              dislike: 0,
            },
          ],
        },
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Jane Doe",
      comment: "This is another comment",
      like: 1,
      dislike: 0,
      comments: [
        {
          id: Math.floor(Math.random() * 1000),
          name: "John Doe",
          comment: "This is a comment",
          like: 0,
          dislike: 0,
          comments: [
            {
              id: Math.floor(Math.random() * 1000),
              name: "John Doe",
              comment: "This is a comment",
              like: 0,
              dislike: 0,
            },
          ],
        },
      ],
    },
  ]);

  const commentHandler = (e) => {
    console.log(e);
    e.preventDefault();
    const newComment = {
      id: Math.floor(Math.random() * 1000),
      name: "John Doe",
      comment: e.target[0].value,
      like: 0,
      dislike: 0,
      comments: [],
    };
    setComments([...comments, newComment]);
    e.target[0].value = "";
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

  const replyCommentHandler = (e, id) => {
    e.preventDefault();

    const newComments = comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          comments: [
            ...comment.comments,
            {
              id: Math.floor(Math.random() * 1000),
              name: "John Doe",
              comment: e.target[0].value,
              like: 0,
              dislike: 0,
              parentId: id,
            },
          ],
        };
      }
      return comment;
    });
    setComments(newComments);
    e.target[0].value = "";
  };

  return (
    commentsOpen && (
      <>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h5>Comments ({comments.length})</h5>
          </div>
          <Form onSubmit={commentHandler} />
          {comments.map((comment) => (
            <Card
              key={comment.id}
              comment={comment}
              likeHandler={likeHandler}
              dislikeHandler={dislikeHandler}
              replyHandler={replyCommentHandler}
            />
          ))}
        </div>
      </>
    )
  );
};

export default Comment;
