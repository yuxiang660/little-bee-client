import React from "react";

export default class Files extends React.Component {
  render() {
    const edges = this.props.metadata;
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
              {edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.parent.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
  }
}
