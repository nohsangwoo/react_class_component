import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/content';
import Subject from './components/Subject';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web" />
        <TOC />
        <Content title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
