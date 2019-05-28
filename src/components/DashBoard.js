import React, { Component } from 'react';
import 'scss/DashBoard.scss';

class DashBoard extends Component {
  state = {
    boards: [
      {
        bno: 1,
        bwriter: 'Me',
        btitle: 'Hello',
        bdate: new Date(),
      },
      {
        bno: 2,
        bwriter: 'You',
        btitle: 'Hi',
        bdate: new Date(),
      },
    ],
  };
  render() {
    const { boards } = this.state;
    return (
      <div className="dashBoard">
        <table className="boardTable">
          <tbody>
            <tr align="center">
              <th width="50">No.</th>
              <th width="250">Title</th>
              <th width="100">Name</th>
              <th width="100">Date</th>
            </tr>
            {boards.reverse().map(board => (
              // brdRow라는 변수에 map인 board를 넣어서 BoardItem 컴포넌트로 보낸다. 보내는 순간 보드아이템 컴포넌트는 자식이 된다.
              // brdRow라는 변수는 보드아이템에서 사용할 변수명이다. 부모에서 지정해준 거니까 props로 사용해야 한다.
              <BoardItem key={board.bno} brdRow={board} />
            ))}
          </tbody>
        </table>
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
