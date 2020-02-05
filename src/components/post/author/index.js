// @flow strict
import React from 'react';
import { getContactHref } from 'src/assets/utils';
import styles from './index.module.scss';
import useSiteMetadata from 'src/query/site-metadata';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export default Author;
