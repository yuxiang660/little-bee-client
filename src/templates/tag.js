// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'src/components/layout';
import Sidebar from 'src/components/sidebar';
import Feed from 'src/components/feed';
import Page from 'src/components/page';
import Pagination from 'src/components/pagination';
import useSiteMetadata from 'src/shared/query/site-metadata';
import type { AllMarkdownRemark, PageContext } from 'src/shared/types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext,
};

const TagTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    tag,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle =
    currentPage > 0
      ? `All Posts tagged as "${tag}" - Page ${currentPage} - ${siteTitle}`
      : `All Posts tagged as "${tag}" - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar />
      <Page title={tag}>
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
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        contents {
          title
          subtitle
        }
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        fields: { template: { eq: "posts" } }
        frontmatter: { tags: { in: [$tag] } }
      }
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

export default TagTemplate;
