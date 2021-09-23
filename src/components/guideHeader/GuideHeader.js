import React from "react";
import "./GuideHeader.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

const Header = ({ content }) => {
  const image = getImage(content.image.localFile);
  let diff = [];
  let diffTwo = "";
  switch (content.difficulty) {
    case 1:
      diffTwo = "Easy";
      break;
    case 2:
      diffTwo = "Moderate";
      break;
    case 3:
      diffTwo = "Hard";
      break;
    default:
      console.log(`Not a diff`);
  }
  for (let i = 0; i < content.difficulty; i++) {
    diff.push(
      <span
        key={i}
        style={{
          backgroundColor: "#f9c03e",
          display: "inline-block",
          width: "20px",
          height: "6px",
          marginRight: "5px",
          borderRadius: "6px",
        }}
      ></span>
    );
  }

  if (3 - content.difficulty > 0) {
    for (let i = 0; i < 3 - content.difficulty; i++) {
      diff.push(
        <span
          key={i}
          style={{
            backgroundColor: "#e6e6e6",
            display: "inline-block",
            width: "20px",
            height: "6px",
            marginRight: "5px",
            borderRadius: "6px",
          }}
        ></span>
      );
    }
  }

  return (
    <div className="guideHeader_container">
      <div className="guideHeader_firstsection">
        <p className="guideHeader_title">{content.title}</p>
        <p className="guideHeader_author">{`Author: ${content.author}`}</p>
      </div>
      <div className="guideHeader_secondsection">
        <div className="guideHeader_image">
          <GatsbyImage
            image={image}
            style={{ width: "405px", height: "209px" }}
            alt={content.title}
          />
        </div>
        <div className="guideHeader_info">
          <div className="guideHeader_difficulty">
            <span>{`Difficulty: `}</span>
            <span>
              {diff}
              <span style={{ fontWeight: "700", color: "#d7a500" }}>
                {diffTwo}
              </span>
            </span>
          </div>
          <div className="guideHeader_steps">
            <span>{`Steps: `}</span>
            <span>{`${content.steps.length}`}</span>
          </div>
          <div className="guideHeader_time_required">
            <span>{`Time Required: `}</span>
            <span>{`${content.time_required}`}</span>
          </div>
        </div>
      </div>
      <div className="guideHeader_introduction">
        <div className="guideHeader_introduction_title">Introduction</div>
        <div className="guideHeader_introduction_text">
          <ReactMarkdown>{content.introduction}</ReactMarkdown>
          {/* {content.introduction} */}
          {/* <Markdown children={content.introduction} escapeHtml={false} /> */}
          {/* <ReactMarkdown source={content.introduction} /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
