import React from "react";
import { useSpring, animated } from "react-spring";
import { NavLink, withRouter } from "react-router-dom";
import "./error-page.css";

const ErrorPage = ({ history, blockStyle }) => {
  const rightBlock = useSpring({
    from: { transform: `translate3d(0, 100vh, 0)` },
    to: { transform: `translate3d(0, 0, 0)` },
    config: { mass: 1, tension: 400, friction: 12 }
  });

  return (
    <div className="error-page">
      <div className="error-me">
        <animated.div
          style={rightBlock}
          className={`right-error-block${blockStyle ? blockStyle : ""}`}
        >
          <div className="error-container">
            <div className="notfound">
              <div className="notfound-404">
                <h1>
                  4<span>0</span>4
                </h1>
              </div>
              <p>Oops! Page not found. Please go to home page</p>
              <button onClick={history.goBack}>Go Back</button>
              <NavLink to="/">Go to home page</NavLink>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default withRouter(ErrorPage);
