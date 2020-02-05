import { useStaticQuery, graphql } from 'gatsby';

const useMarkdownRemark = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: {fields: frontmatter___title, order: DESC}) {
          edges {
            node {
              parent {
                ... on File {
                  name
                }
              }
            }
          }
        }
      }
    `
  );

  return allMarkdownRemark.edges;
};

export default useMarkdownRemark;