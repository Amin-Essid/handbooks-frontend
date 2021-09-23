import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Nav from "../components/nav/Nav";

const Handbook = ({ data }) => {
  console.log(data.strapiHandbook);
  return (
    <div>
      <Nav />
      <Header content={data.strapiHandbook} />
      <Menu
        link={data.strapiHandbook.url}
        title="Categories"
        items={data.strapiHandbook.categories}
        ItemClass="menu"
      />
    </div>
  );
};

export default Handbook;

export const query = graphql`
  query HandbookTemplate($url: String!) {
    strapiHandbook(url: { eq: $url }) {
      title
      url
      author
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      description
      created_at
      categories {
        title
        url
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
