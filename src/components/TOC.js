import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('TOC render');
    const Objs = this.props.data;
    return (
      <nav>
        <ul>
          {Objs.map(data => (
            <li
              key={data.id}
              onClick={e => {
                e.preventDefault();
                this.props.onChangePage(data.id);
              }}
            >
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
