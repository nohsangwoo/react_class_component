import React, { Component } from 'react';

class CreateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
    };
  }
  render() {
    console.log('CreateContent render');

    return (
      <article>
        <h2>Create Content</h2>
        <form
          // action="/create_process"
          method="post"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state.title, this.state.desc);
            e.target.title.value = '';
            e.target.desc.value = '';
          }}
        >
          <p>
            <input
              type="text"
              name="title"
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
              placeholder="title"
              required
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              onChange={e => {
                this.setState({
                  desc: e.target.value,
                });
              }}
              placeholder="description"
              required
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
