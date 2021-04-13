import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/content';
import Subject from './components/Subject';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'WEB', sub: 'World Wide Web' },
      content: {
        title: 'HTML',
        desc: 'HTML is HyperText Markup Language.',
      },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'Javascript', desc: 'Javascript is for interactive' },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        <TOC data={this.state.contents} />
        <Content
          title={this.state.content.title}
          desc={this.state.content.desc}
        />
      </div>
    );
  }
}

export default App;
