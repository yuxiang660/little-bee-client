import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'src/components/layout';
import Sidebar from 'src/components/sidebar';
import Feed from 'src/components/feed';
import Page from 'src/components/page';
import Pagination from 'src/components/pagination';
import useSiteMetadata from 'src/shared/query/site-metadata';
import { PageContext, AllMarkdownRemark } from 'src/shared/types';

interface IndexTemplateProps {
  data: AllMarkdownRemark;
  pageContext: PageContext;
}

const IndexTemplate: React.FC<IndexTemplateProps> = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { fields: { template: { eq: "posts" } } }
      sort: { order: DESC, fields: [fields___date] }
    ) {
      edges {
        node {
          fields {
            slug
            date
            categorySlug
          }
          frontmatter {
            title
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
