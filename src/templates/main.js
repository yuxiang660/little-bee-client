// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import Feed from '../components/feed';
import Page from '../components/page';
import Pagination from '../components/pagination';
import useSiteMetadata from '../query/site-metadata';
import type { PageContext, AllMarkdownRemark } from '../assets/types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;


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
        limit: $postsLimit,
        skip: $postsOffset,
        filter: {
          fields: { folder: { eq: "posts" } },
          frontmatter: { draft: { ne: true } }
        }
        sort: { order: DESC, fields: [fields___date] }
      ){
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
