import React from 'react';
import Sidebar from 'src/components/sidebar';
import Layout from 'src/components/layout';
import Page from 'src/components/page';
import useSiteMetadata from 'src/shared/query/site-metadata';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
