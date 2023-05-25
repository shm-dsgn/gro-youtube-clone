import React, { useState } from "react";
import "./Skeleton.css";

const Skeleton = (props) => {
  return (
    <div className="video-app-skl">
      <div className="card-block-skl">
        {props.data?.map((post) => {
          return (
            <div key={post.postId} className="card-skl">
              <div className="thumbnail-skl"></div>
              <div className="card-desc-skl">
                <div className="post-title-skl"></div>
                <div className="handle-skl"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skeleton;
