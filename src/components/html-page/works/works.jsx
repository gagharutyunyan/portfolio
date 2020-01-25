import React from "react";
import { uid } from "react-uid";

import "./works.css";

const Item = () => {
  const worksData = [
    {
      title: "Flappy-bird",
      description: "Flappy-bird game created on vanilla JS",
      url: "https://gagharutyunyan.github.io/flappy-bird/",
      backgroundImageUrl:
        "https://raw.githubusercontent.com/gagharutyunyan/gagharutyunyan.github.io/master/flappy-bird.gif"
    },
    {
      title: "To-do on React",
      description:
        "To-do list used React, all the functions work(add, delete, search, check, count) ",
      url: "https://gagharutyunyan.github.io/to-do-react/",
      backgroundImageUrl:
        "https://raw.githubusercontent.com/gagharutyunyan/gagharutyunyan.github.io/master/to-do-react.gif"
    }
  ];
  return (
    <div className="cards_wrapper">
      <div className="cards">
        <div className="card_container">
          {worksData.map(item => (
            <a
              key={uid(item)}
              target="_blank"
              href={item.url}
              rel="noopener noreferrer"
              className="card"
            >
              <div className="wrap">
                <div className="profile">
                  <h3 className="title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url(${item.backgroundImageUrl})`
                    }}
                  ></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
