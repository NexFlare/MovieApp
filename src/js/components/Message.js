import React from "react";
import "../../stylesheet/loading.css";

function Message({ type, message }) {
  return (
    <div className="message-container">
      <div className="image-container">
        {type === "error" ? (
          <i className="fas fa-exclamation-triangle"></i>
        ) : (
          <i className="fas fa-spinner"></i>
        )}
      </div>
      <div className="message-text">
        {type === "error"
          ? message || "Something went wrong"
          : "Please wait loading..."}
      </div>
    </div>
  );
}

export default Message;
