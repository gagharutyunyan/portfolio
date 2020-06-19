import React from "react";
import useWindowDimensions from "../../useHooks/useWindowDimensions/useWindowDimensions.jsx";
import "./author-name-animation.css";

const AuthorNameAnimation = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 1300 ? (
        <div className="author_title">
          <video
            src="https://gagharutyunyan.github.io/smoke.mp4"
            autoPlay
            muted
          ></video>
          <h1>
            <span>J</span>
            <span>S</span>
            <span>&</span>
            <span>G</span>
            <span>A</span>
            <span>G</span>
          </h1>
        </div>
      ) : null}
    </>
  );
};

export default AuthorNameAnimation;
