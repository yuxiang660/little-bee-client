import { useStaticQuery, graphql } from 'gatsby';

// The export function should start with `use` prefix.
const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
