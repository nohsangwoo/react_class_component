import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      desc: '',
    };
  }
  render() {
    console.log('CreateContent render');

    return (
      <article>
        <h2>Update Content</h2>
        <form
          // action="/create_process"
          method="post"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
            e.target.id.value = '';
            e.target.title.value = '';
            e.target.desc.value = '';
          }}
        >
          <p>
            <input
              type="text"
              name="id"
              onChange={e => {
                this.setState({ id: e.target.value });
              }}
              placeholder="id"
              required
            ></input>
          </p>
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

export default UpdateContent;
