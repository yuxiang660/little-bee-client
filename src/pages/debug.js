import React from 'react';

import useMarkdownRemark from 'src/shared/query/markdown-remark';
import Files from 'src/components/files';
import Layout from 'src/components/layout';
import Sidebar from 'src/components/sidebar';
import Pagination from 'src/components/pagination';

const Debug = props => {
  const metadata = useMarkdownRemark();
  return (
    <Layout>
      <Sidebar />
      <Files metadata={metadata} {...props} />
      <Pagination />
    </Layout>
  );
};

export default Debug;
