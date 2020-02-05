// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'src/components/layout';
import Sidebar from 'src/components/sidebar';
import Page from 'src/components/page';
import useSiteMetadata from 'src/query/site-metadata';
import type { MarkdownRemark } from 'src/assets/types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark,
  },
};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title: pageTitle, description: pageDescription } = frontmatter;
  const metaDescription =
    pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;

export default PageTemplate;
