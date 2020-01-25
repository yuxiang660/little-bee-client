import React from 'react'

import useMarkdownRemark from '../query/markdown-remark'
import Files from '../components/files'
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import Pagination from '../components/Pagination';

export default props => {
  const metadata = useMarkdownRemark();
  return (
    <Layout>
      <Sidebar />
      <Files metadata={metadata}{...props} />
      <Pagination />
    </Layout>
  )
}