import React, { useState } from "react";
import "./Video.css";
import Popup from "../Popup/Popup";

const Video = (props) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className="video-app">
      <div className="card-block">
        {props.data?.map((post) => {
          return (
            <div
              key={post.postId}
              className="card"
              
            >
              <img className="thumbnail" src={post.submission.thumbnail} onClick={() => handleCardClick(post)}/>
              <div className="card-desc">
                <h1 className="post-title">{post.submission.title}</h1>
                <p className="handle">@{post.creator.handle}</p>
              </div>
            </div>
          );
        })}
      </div>
      {selectedCard && <Popup selectedCard={selectedCard} onClose={handleClosePopup} className="popup" />}
    </div>
  );
};

export default Video;
