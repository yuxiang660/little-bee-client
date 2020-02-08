import React, { useState } from 'react';
import { Input } from 'antd';

import useMarkdownRemark from 'src/shared/query/markdown-remark';

import styles from './index.module.scss';

const Files = () => {
  const allFiles = useMarkdownRemark();
  const [state, setState] = useState<{ filteredFiles: (string | undefined)[] }>({
    filteredFiles: allFiles.map(file => file.node.parent.name),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredFiles = allFiles.map(file => {
      const title = file.node.parent.name;
      if (title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return title;
      }
    });
    setState({ filteredFiles });
  };

  return (
    <div className={styles.page}>
      <div className={styles.filter}>
        <Input placeholder="filter posts" type="text" onChange={handleChange} />
      </div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Filenames</th>
            </tr>
          </thead>
          <tbody>
            {state.filteredFiles.map((file, index) => (
              <tr key={index}>
                <td>{file}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Files;
