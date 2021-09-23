import React from "react";
import "./Menu.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Menu = ({ title, items, link, ItemClass }) => {
  console.log(items, title);
  const menuItems = items.map((item) => {
    const image = getImage(item.image.localFile);
    return (
      <Link
        style={{ textDecoration: "none" }}
        key={item.url}
        to={`/${link}/${item.url}`}
      >
        <div className={`${ItemClass}_item`}>
          <h5 className={`${ItemClass}_item_title`}>{item.title}</h5>
          <div>
            <GatsbyImage
              image={image}
              className={`${ItemClass}_item_image`}
              alt={item.title}
            />
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="menu_container">
      <div className="menu_title">{title}</div>
      <div className="menu_items">{menuItems}</div>
    </div>
  );
};

export default Menu;
