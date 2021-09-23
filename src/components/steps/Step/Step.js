import React, { useState } from "react";
import "../Steps.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

const Steps = ({ item, index }) => {
  const [mainImage, setMainImage] = useState(0);
  let image, imagesGallery;
  if (item.images) {
    image = getImage(item.images[mainImage].localFile);
    imagesGallery = item.images.map((img, i) => {
      const Img = getImage(img.localFile);
      return (
        <div key={i} onClick={() => setMainImage(i)}>
          <GatsbyImage
            image={Img}
            className={
              i === mainImage ? "step_gallery_image_main" : "step_gallery_image"
            }
            alt="step image"
          />
        </div>
      );
    });
  }

  return (
    <div className="step_container">
      <div className="step_title">
        <span>{`Step ${index + 1} `}</span>
        {`${item.title}`}
      </div>
      <div className="step_info">
        <div className="step_mainimage">
          {item.images && (
            <GatsbyImage
              image={image}
              className="step_image"
              alt={item.title}
            />
          )}
        </div>
        <div className="step_details">
          {item.images && item.images.length > 1 && (
            <div className="step_gallery">{imagesGallery}</div>
          )}
          <div className="step_instructions">
            <ReactMarkdown>{item.instructions}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
