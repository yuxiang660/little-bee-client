import { useStaticQuery, graphql } from 'gatsby';

// The export function should start with `use` prefix.
const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            contents {
              url
              title
              subtitle
              copyright
              disqusShortname
              author {
                name
                bio
                photo
                contacts {
                  facebook
                  linkedin
                  github
                  twitter
                  telegram
                  instagram
                  email
                  rss
                  vkontakte
                  line
                  gitlab
                  weibo
                  codepen
                  youtube
                }
              }
              menu {
                label
                path
              }
            }
          }
        }
      }
    `,
  );

  return site.siteMetadata.contents;
};

export default useSiteMetadata;
