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
    },
    {
      title: "Very simple NodeJs app",
      description:
        "Simple app with adding new films used NodeJs, Express, Handlebars  ",
      url: "https://github.com/gagharutyunyan/handlebars-demo-app",
      backgroundImageUrl: "https://i.postimg.cc/kG5tdxv4/fdsfdsf.png"
    },
    {
      title: "Responsive landing page",
      description: "Responsive page (used Vue), router, validation. ",
      url: "https://gagharutyunyan.github.io/vue-landing/",
      backgroundImageUrl: "https://i.postimg.cc/tR2k6JKp/fewewfwef.png"
    },
    {
      title: "Fixed profile page",
      description: "Fixed page, used HTML, CSS, JS. ",
      url: "https://gagharutyunyan.github.io/test-layot/",
      backgroundImageUrl: "https://i.postimg.cc/0NPcTBF0/cdsafasfsd.png"
    },
    {
      title: "To-do list",
      description: "Simple responsive to-do list. LocaleStorage is working ",
      url: "https://gagharutyunyan.github.io/to-do-js/",
      backgroundImageUrl: "https://i.postimg.cc/hvZGB62z/fsafas.png"
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
