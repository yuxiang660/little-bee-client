// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(filter: { fields: { template: { eq: "posts" } } }) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useCategoriesList;
