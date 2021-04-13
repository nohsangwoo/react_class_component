import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/content';
import Subject from './components/Subject';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      subject: { title: 'WEB', sub: 'World Wide Web' },
      welcom: { title: 'Welcom', desc: 'Hello React!!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'Javascript', desc: 'Javascript is for interactive' },
      ],
    };
  }
  render() {
    console.log('App render');
    let _title,
      _desc = null;
    if (this.state.mode === 'welcom') {
      _title = this.state.welcom.title;
      _desc = this.state.welcom.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        <TOC data={this.state.contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
