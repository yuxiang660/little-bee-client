import React from 'react';
import PropTypes from 'prop-types';

const Files = ({ metadata }) => {
  const edges = metadata;
  return (
    <div>
      <h1>All Pages</h1>
      <table>
        <thead align="left">
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

Files.propTypes = {
  metadata: PropTypes.array.isRequired,
};

export default Files;
