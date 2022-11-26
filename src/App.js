import "./App.css";
import Comment from "./components/comments/Comment";
import Review from "./components/review/Review";
import { useState } from "react";

function App() {
  const [commentsOpen, setCommentsOpen] = useState(true);
  return (
    <div className="App">
      <Review setCommentsOpen={setCommentsOpen} />
      <Comment commentsOpen={commentsOpen} />
    </div>
  );
}

export default App;
