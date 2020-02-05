// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from 'src/components/layout';
import Sidebar from 'src/components/sidebar';
import Page from 'src/components/page';
import useSiteMetadata from 'src/shared/query/site-metadata';
import useTagsList from 'src/shared/query/tags-list';

const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Tags">
        <ul>
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
