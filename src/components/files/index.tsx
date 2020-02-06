import React from 'react';

interface FileProps {
  metadata: {
    node: {
      parent: {
        name: string;
      };
    };
  }[];
}

const Files: React.FC<FileProps> = ({ metadata }) => {
  const edges = metadata;
  return (
    <div>
      <h1>All Pages</h1>
      <table>
        <thead>
          <tr>
            <th>Filename</th>
          </tr>
        </thead>
        <tbody>
          {edges.map((edge, index) => (
            <tr key={index}>
              <td>{edge.node.parent.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Files;
