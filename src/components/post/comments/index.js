// @flow strict
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import useSiteMetadata from 'src/shared/query/site-metadata';

type Props = {
  postTitle: string,
  postSlug: string,
};

const Comments = ({ postTitle, postSlug }: Props) => {
  const { url, disqusShortname } = useSiteMetadata();

  if (!disqusShortname) {
    return null;
  }

  return (
    <ReactDisqusComments
      shortname={disqusShortname}
      identifier={postTitle}
      title={postTitle}
      url={url + postSlug}
    />
  );
};

export default Comments;
