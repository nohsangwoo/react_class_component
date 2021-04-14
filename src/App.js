import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import DeleteContent from './components/DeleteContent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'delete',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World Wide Web' },
      welcom: { title: 'Welcom', desc: 'Hello React!!!' },
      contents: [
        { id: 0, title: 'HTML', desc: 'HTML is for information' },
        { id: 1, title: 'CSS', desc: 'CSS is for design' },
        { id: 2, title: 'Javascript', desc: 'Javascript is for interactive' },
      ],
    };
  }

  getContent() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === 'welcom') {
      _title = this.state.welcom.title;
      _desc = this.state.welcom.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === 'read') {
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
            const newContents = [
              ...this.state.contents,
              {
                id: this.state.contents.length,
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
    } else if (this.state.mode === 'update') {
      _article = (
        <UpdateContent
          onSubmit={(_id, _title, _desc) => {
            const omitContents = this.state.contents.filter(content => {
              return content.id !== +_id;
            });
            const newContent = { id: +_id, title: _title, desc: _desc };
            omitContents.splice(+_id, 0, newContent);
            const addedContents = Array.from(omitContents);
            this.setState({
              contents: addedContents,
            });
          }}
        />
      );
    } else if (this.state.mode === 'delete') {
      _article = (
        <DeleteContent
          onSubmit={_id => {
            const deletedContents = this.state.contents.filter(content => {
              return content.id !== +_id;
            });

            this.setState({
              contents: deletedContents,
            });
          }}
        />
      );
    }
    return _article;
  }
  render() {
    console.log('App render');

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

        {this.getContent()}
      </div>
    );
  }
}

export default App;
