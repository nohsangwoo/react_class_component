import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('asdfadsf', this.props.data);
    const Objs = this.props.data;
    return (
      <nav>
        <ul>
          {Objs.map(data => (
            <li key={data.id}>
              <a href={`/content/${data.id}.html`}>{data.title}</a>
              <div>{data.desc}</div>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default TOC;
