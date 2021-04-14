import React, { Component } from 'react';

class CreateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }
  render() {
    console.log('delete render');

    return (
      <article>
        <h2>Delete Content</h2>
        <form
          method="post"
          onSubmit={e => {
            if (window.confirm('really?')) {
              e.preventDefault();
              this.props.onSubmit(this.state.id);
            }

            e.target.id.value = '';
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
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
