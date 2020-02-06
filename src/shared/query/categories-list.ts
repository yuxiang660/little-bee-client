import { useStaticQuery, graphql } from 'gatsby';

interface CategoriesListReturns {
  fieldValue: string;
  totalCount: string;
}

const useCategoriesList = (): CategoriesListReturns[] => {
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
    `,
  );

  return allMarkdownRemark.group;
};

export default useCategoriesList;
