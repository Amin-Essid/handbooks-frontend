import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";

import Nav from "../components/nav/Nav";

const Category = ({ data }) => {
  console.log(data.strapiCategory);
  return (
    <div>
      <Nav />
      <Header content={data.strapiCategory} />
      <Menu
        ItemClass="category"
        title="Categories"
        items={data.strapiCategory.guides}
        link={`${data.strapiCategory.handbook.url}/${data.strapiCategory.url}`}
      />
    </div>
  );
};

export default Category;

export const query = graphql`
  query CategoryTemplate($url: String!) {
    strapiCategory(url: { eq: $url }) {
      url
      author
      description
      title
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      handbook {
        url
      }
      guides {
        title
        url
        id
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
