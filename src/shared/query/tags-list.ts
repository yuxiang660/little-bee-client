import { useStaticQuery, graphql } from 'gatsby';

interface TagListReturns {
  fieldValue: string;
  totalCount: string;
}

const useTagsList = (): TagListReturns[] => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(filter: { fields: { template: { eq: "posts" } } }) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return allMarkdownRemark.group;
};

export default useTagsList;
