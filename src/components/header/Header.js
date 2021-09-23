import React from "react";
import "./Header.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Header = ({ content }) => {
  const image = getImage(content.image.localFile);
  return (
    <div className="header_container">
      <div className="header_image">
        <GatsbyImage
          image={image}
          style={{ width: "252px", height: "168px" }}
          alt={content.title}
        />
      </div>
      <div className="header_info">
        <p className="header_title">{content.title}</p>
        <p className="header_description">{content.description}</p>
        <p className="header_author">{`author: ${content.author}`}</p>
      </div>
    </div>
  );
};

export default Header;
