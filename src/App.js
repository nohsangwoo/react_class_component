import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/control';
import CreateContent from './components/CreateContent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'create',
      selected_content_id: 2,
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
    console.log('App render', this.state.mode, this.state.contents);

    let _title,
      _desc,
      _article = null;
    if (this.state.mode === 'welcom') {
      _title = this.state.welcom.title;
      _desc = this.state.welcom.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === 'read') {
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc;
      const data = this.state.contents;
      const findCorrectId = data.filter(data => {
        return data.id === this.state.selected_content_id;
      });
      const [distructureObj] = findCorrectId;
      const { title, desc } = distructureObj;
      _title = title;
      _desc = desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={(_title, _desc) => {
            // add content to this.state.contents
            const newContents = [
              ...this.state.contents,
              {
                id: this.state.contents.length + 1,
                title: _title,
                desc: _desc,
              },
            ];
            this.setState({
              contents: newContents,
            });
          }}
        />
      );
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={e => {
            e.preventDefault();
            this.setState({ mode: 'welcom' });
          }}
        />
        <TOC
          onChangePage={data_id => {
            this.setState({ mode: 'read', selected_content_id: data_id });
          }}
          data={this.state.contents}
          setState={this.setState}
        />
        <Control
          onChangePage={mode => {
            this.setState({ mode });
          }}
        />

        {/* {this.state.mode === 'read' ? (
          <ReadContent title={_title} desc={_desc} />
        ) : (
          <CreateContent />
        )} */}
        {_article}
      </div>
    );
  }
}

export default App;
