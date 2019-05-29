import React, { Component } from 'react';
import 'scss/DashBoard.scss';

class DashBoard extends Component {
  state = {
    currentNo: 4,
    boards: [
      {
        bno: 1,
        bwriter: '종형',
        btitle: '일촌평과 같이 글을 남길 수 있는 형태의 게시판입니다.',
        bdate: new Date(),
      },
      {
        bno: 2,
        bwriter: '종형',
        btitle: '다만 이 게시판은 저장이 되지 않습니다. (no-DB)',
        bdate: new Date(),
      },
      {
        bno: 3,
        bwriter: '종형',
        btitle: '단순히 게시판 형태의 구현을 위해 만들어둔 페이지이므로',
        bdate: new Date(),
      },
      {
        bno: 4,
        bwriter: '종형',
        btitle: '문의는 이메일을 클릭해서 남겨주시면 감사하겠습니다.',
        bdate: new Date(),
      },
    ],
  };
  handleDataSave = data => {
    this.setState({
      boards: this.state.boards.concat({
        bno: this.setState.currentNo++,
        bdate: new Date(),
        ...data,
      }),
    });
  };
  render() {
    const { boards } = this.state;
    return (
      <div className="dashBoard">
        <table className="boardTable">
          <tbody>
            <tr align="center">
              <th width="50rem">No.</th>
              <th width="250rem">Comment</th>
              <th width="80rem">Name</th>
              <th width="80rem">Date</th>
            </tr>
            {boards.reverse().map(board => (
              // brdRow라는 변수에 map인 board를 넣어서 BoardItem 컴포넌트로 보낸다. 보내는 순간 보드아이템 컴포넌트는 자식이 된다.
              // brdRow라는 변수는 보드아이템에서 사용할 변수명이다. 부모에서 지정해준 거니까 props로 사용해야 한다.
              <BoardItem key={board.bno} brdRow={board} />
            ))}
          </tbody>
        </table>
        <InputBoard onDataSave={this.handleDataSave} />
      </div>
    );
  }
}

class InputBoard extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onDataSave(this.state);
    this.setState({});
  };

  render() {
    return (
      <div className="inputBoard">
        <form className="inputForm" onSubmit={this.handleSubmit}>
          <input
            id="nameOf"
            type="text"
            placeholder="Name"
            onChange={this.handleChange}
            required
          />
          <input
            id="contentsOf"
            type="text"
            placeholder="Comment(공백 포함 최대 30자)"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

class BoardItem extends Component {
  render() {
    return (
      <tr className="tableContents" align="center">
        <td>{this.props.brdRow.bno}</td>
        <td>{this.props.brdRow.btitle}</td>
        <td>{this.props.brdRow.bwriter}</td>
        <td>{this.props.brdRow.bdate.toLocaleDateString('ko-KR')}</td>
      </tr>
    );
  }
}

export default DashBoard;
