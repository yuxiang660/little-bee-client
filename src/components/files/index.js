// @flow strict
import React from "react";

type Node = {
  parent: {
    filename: string
  }
};

type Edge = {
  node: Node
};

type Edges = Array<Edge>;

type Props = {
  metadata?: Edges,
};

const Files = ({ metadata }: Props) => {
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
  )
}

export default Files;