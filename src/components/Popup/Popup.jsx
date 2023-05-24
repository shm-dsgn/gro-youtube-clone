import React, { useState } from "react";
import "./Popup.css";
import ReactPlayer from "react-player";
import { ChatCircle, Heart, XCircle } from "@phosphor-icons/react";

const Popup = (props) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="popup">
      <div className="overlay">
        <div className="creatorAndActionbtn">
          <div className="creator">
            <img src={props.selectedCard.creator.pic} className="creator-pic" />
            <div className="creator-details">
              <p>
                {props.selectedCard.creator.name
                  ? props.selectedCard.creator.name
                  : "growTube User"}
              </p>
              <p className="creator-handle">
                @{props.selectedCard.creator.handle}
              </p>
            </div>
          </div>

          <div className="action-btn">
            <div className="reaction">
              {props.selectedCard.reaction.voted ? (
                <Heart size={28} color="red" weight="fill" />
              ) : (
                <Heart size={28} color="white" />
              )}
              <p className="reaction-count">
                {props.selectedCard.reaction.count}
              </p>
            </div>

            {props.selectedCard.comment.commentingAllowed && (
              <div className="comment">
                <ChatCircle size={28} color="white" />
                <p className="comment-count">
                  {props.selectedCard.comment.count}
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          className="submission"
          onClick={() => setShowDescription(!showDescription)}
        >
          <p className="submission-title">
            {props.selectedCard.submission.title}
          </p>
          {showDescription ? (
            <p className="submission-description">
              {props.selectedCard.submission.description}
            </p>
          ) : null}
        </div>
      </div>

      <div className="video">
        <video loop={true} width="370" height="100%" autoPlay>
          <source
            src={props.selectedCard.submission.mediaUrl}
            type="video/mp4"
          />
        </video>
      </div>

      <XCircle
        size={28}
        color="white"
        onClick={props.onClose}
        className="close-btn"
        weight="fill"
      />
    </div>
  );
};

export default Popup;
