import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'src/components/layout';
import Sidebar from 'src/components/sidebar';
import Feed from 'src/components/feed';
import Page from 'src/components/page';
import Pagination from 'src/components/pagination';
import useSiteMetadata from 'src/shared/query/site-metadata';
import { AllMarkdownRemark, PageContext } from 'src/shared/types';

interface CategoryTemplateProps {
  data: AllMarkdownRemark;
  pageContext: PageContext;
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    category,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle =
    currentPage > 0
      ? `${category} - Page ${currentPage} - ${siteTitle}`
      : `${category} - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar />
      <Page title={category}>
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
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        fields: { template: { eq: "posts" } }
        frontmatter: { category: { eq: $category } }
      }
      sort: { order: DESC, fields: [fields___date] }
    ) {
      edges {
        node {
          fields {
            categorySlug
            slug
            date
          }
          frontmatter {
            description
            category
            title
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
