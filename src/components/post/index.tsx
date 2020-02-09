import React from 'react';
import { Link } from 'gatsby';
import Author from './author';
import Comments from './comments';
import Content from './content';
import Meta from './meta';
import Tags from './tags';
import styles from './index.module.scss';

interface PostProps {
  post: {
    html: string;
    fields: {
      tagSlugs: string[];
      slug: string;
      date: string;
    };
    frontmatter: {
      tags: string[];
      title: string;
    };
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { html } = post;
  const { tagSlugs, slug, date } = post.fields;
  const { tags, title } = post.frontmatter;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        All Bee Blogs
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
