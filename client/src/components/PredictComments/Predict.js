import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addCommentAction,
  getCommentsAction,
} from "../../Redux/actions/Actions";
import "./Predict.css";
const Predict = (props) => {
  const [commentMessage, setCommentMessage] = useState("");
  const session = sessionStorage.getItem("storedSession");
  const history = useHistory();
  let match = props.location.pathname.slice(10);
  useEffect(() => {
    if (!session) {
      history.push("/login");
    }
    props.fetchComments(match);
  }, []);
  const submitComment = () => {
    let match = props.location.pathname.slice(10);
    let username = session;
    let commentData = {
      match: match,
      username: username,
      comment: commentMessage,
    };
    props.comment(commentData);
    window.location.reload();
  };

  return (
    <div className="comments-section">
      <div className="add-comment">
        <input
          className="input-comment"
          onChange={(e) => setCommentMessage(e.target.value)}
        ></input>
        <button className="comment-button" onClick={(e) => submitComment()}>
          comment
        </button>
      </div>
      <div className="prev-comments">
        {props.prevComments === "No Comments" ? (
          <p>No Comments Yet</p>
        ) : (
          Object.values(props.prevComments).map((comment, key) => {
            return (
              <div className="comment" id={comment._id} key={key}>
                <div className="name-div">
                  <p className="name">{comment.username}</p>
                  <p className="predicted">{comment.comment}</p>
                  <p className="comment-created">{comment.created}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  prevComments: state.Comments,
});
const mapDispatchToProps = (dispatch) => ({
  comment: (commentData) => dispatch(addCommentAction(commentData)),
  fetchComments: (match) => dispatch(getCommentsAction(match)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Predict);
