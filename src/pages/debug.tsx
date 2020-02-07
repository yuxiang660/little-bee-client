import React from 'react';
import { Input } from 'antd';

import useMarkdownRemark from 'src/shared/query/markdown-remark';
import Files from 'src/components/files';
import Layout from 'src/components/layout';

import styles from './debug.module.scss';

const { Search } = Input;

interface DebugProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: any;
}

const Debug: React.FC<DebugProps> = props => {
  const metadata = useMarkdownRemark();
  return (
    <Layout title="Debug">
      <div className={styles.search}>
        <Search />
      </div>
      <Files metadata={metadata} {...props} />
    </Layout>
  );
};

export default Debug;
