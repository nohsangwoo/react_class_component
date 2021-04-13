import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    //   newProps : props의 값이 바뀌었을때 값
    // newState: state의 값이 바뀌었을때 값
    console.log('=====>TOC render shouldComponentUpdate', newProps, this.props);
    // return 이 true면  render()의 내용이 리렌더링되고 return 이 false면 reder()의 내용이 리렌더링되지 않고 이전의 내용을 유지함
    if (newProps.data === this.props.data) {
      return false;
    }
    return true;
  }
  render() {
    console.log('TOC render');
    const Objs = this.props.data;
    return (
      <nav>
        <ul>
          {Objs.map(data => (
            <li
              key={data.id}
              onClick={e => {
                e.preventDefault();
                this.props.onChangePage(data.id);
              }}
            >
              <a href={`/content/${data.id}.html`}>{data.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default TOC;
