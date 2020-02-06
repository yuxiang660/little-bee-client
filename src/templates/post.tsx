import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'src/components/layout';
import Post from 'src/components/post';
import useSiteMetadata from 'src/shared/query/site-metadata';
import { MarkdownRemark } from 'src/shared/types';

interface PostTemplateProps {
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription}>
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        description
        tags
        title
      }
    }
  }
`;

export default PostTemplate;
