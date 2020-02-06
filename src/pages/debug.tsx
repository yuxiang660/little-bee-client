import React from 'react';

import useMarkdownRemark from 'src/shared/query/markdown-remark';
import Files from 'src/components/files';
import Layout from 'src/components/layout';
import Sidebar from 'src/components/sidebar';

interface DebugProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: any;
}

const Debug: React.FC<DebugProps> = props => {
  const metadata = useMarkdownRemark();
  return (
    <Layout title="Debug">
      <Sidebar />
      <Files metadata={metadata} {...props} />
    </Layout>
  );
};

export default Debug;
