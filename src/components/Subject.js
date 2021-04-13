import React, { Component } from 'react';

class Subject extends Component {
  render() {
    console.log('SUBJECT render');

    return (
      <header>
        <h1>
          <a onClick={this.props.onChangePage} href="/">
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
