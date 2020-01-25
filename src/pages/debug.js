import React from 'react'

import useMarkdownRemark from '../query/markdown-remark'
import Files from '../components/files/files'

export default props => {
  const metadata = useMarkdownRemark();
  return <Files metadata={metadata}{...props} />
}