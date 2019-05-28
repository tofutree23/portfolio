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
            {boards
              .reverse()
              .map(
                board => (
                  console.log(board),
                  <BoardItem key={board.bno} brdRow={board} />
                ),
              )}
          </tbody>
        </table>
      </div>
    );
  }
}

class BoardItem extends React.Component {
  render() {
    return (
      <tr align="center">
        <td>{this.props.brdRow.bno}</td>
        <td>{this.props.brdRow.btitle}</td>
        <td>{this.props.brdRow.bwriter}</td>
        <td>{this.props.brdRow.bdate.toLocaleDateString('ko-KR')}</td>
      </tr>
    );
  }
}

export default DashBoard;
