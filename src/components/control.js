import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={e => {
              e.preventDefault();
              this.props.onChangePage('create');
            }}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={e => {
              e.preventDefault();
              this.props.onChangePage('update');
            }}
          >
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="delete"
            onClick={e => {
              e.preventDefault();
              this.props.onChangePage('delete');
            }}
          ></input>
        </li>
      </ul>
    );
  }
}

export default Control;
