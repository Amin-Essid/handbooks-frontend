import React from "react";
import { graphql, Link } from "gatsby";
import GuideHeader from "../components/guideHeader/GuideHeader";
import Steps from "../components/steps/Steps";
import Nav from "../components/nav/Nav";

const Guide = ({ data }) => {
  console.log(data.strapiGuide);
  console.log(data.strapiCategory.guides);
  const currentIndex = data.strapiCategory.guides
    .map(function (e) {
      return e.url;
    })
    .indexOf(data.strapiGuide.url);
  console.log(currentIndex);
  return (
    <div>
      <Nav />
      <GuideHeader content={data.strapiGuide} />
      <Steps items={data.strapiGuide.steps} />
      {currentIndex < data.strapiCategory.guides.length - 1 && (
        <Link
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to={`/${data.strapiCategory.handbook.url}/${
            data.strapiCategory.url
          }/${data.strapiCategory.guides[currentIndex + 1].url}`}
        >
          <div
            style={{
              width: "150px",
              height: "50px",
              margin: "50px auto",
              cursor: "pointer",
              fontWeight: "400px",
              fontSize: "20px",
            }}
          >
            {`Next >>`}
          </div>
        </Link>
      )}
    </div>
  );
};

export default Guide;

export const query = graphql`
  query GuideTemplate($url: String!, $categoryUrl: String!) {
    strapiGuide(url: { eq: $url }) {
      author
      created_at
      difficulty
      id
      time_required
      steps {
        created_at
        guide
        instructions
        title
        images {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      introduction
      url
      title
      strapiId
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }

    strapiCategory(url: { eq: $categoryUrl }) {
      url
      handbook {
        url
      }
      guides {
        title
        url
        id
      }
    }
  }
`;
