import React, { Component } from 'react';
import 'scss/DashBoard.scss';

class DashBoard extends Component {
  state = {
    currentNo: 5,
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
  // 넘겨받은 data를 저장하는 함수
  handleDataSave = data => {
    this.setState({
      currentNo: this.state.currentNo + 1,
      boards: this.state.boards.concat({
        bno: this.state.currentNo,
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
            {/* brdRow라는 변수에 map인 board를 넣어서 BoardItem 컴포넌트로 보낸다. 보내는 순간 보드아이템 컴포넌트는 자식이 된다.
            brdRow라는 변수는 보드아이템에서 사용할 변수명이다. 부모에서 지정해준 거니까 props로 사용해야 한다. */}
            {boards
              // slice를 안했더니 reverse를 이상하게 먹더라.. 원본을 건드리지 않고 복사본을 반환하기 때문에 이걸 사용해야하는듯
              .slice(0)
              .reverse()
              .map(board => (
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
  // 내부에서 사용할 state
  state = {};
  // input이 바뀔 때마다 호출될 함수 input에 있는 target의 이름에 밸류를 놓고 state에 저장
  handleChange = e => {
    // this가 의미하는 건 컴포넌트 내의 변수나 함수를 의미하므로 this를 사용해줘야지 얘가 이 컴포넌트 내부 얘기란 걸 알아먹는다
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    // 진짜 데이터를 서버에 넘기고 그러는게 아니니까 일단 기본 기능은 막자
    e.preventDefault();
    // onDataSave라는 함수는 여기에 있는게 아니라 부모에 있으니 props를 통해서 가져다 써야한다
    // 그리고 정보자체는 여기에 있으니 this.state로 넘겨주자
    this.props.onDataSave(this.state);
    // 데이터를 저장해주었기 때문에 state는 초기화시켜야한다
    this.setState({});
  };

  render() {
    return (
      <div className="inputBoard">
        <form className="inputForm" onSubmit={this.handleSubmit}>
          <input
            id="nameOf"
            type="text"
            name="bwriter"
            placeholder="Name"
            onChange={this.handleChange}
            required
          />
          <input
            id="contentsOf"
            type="text"
            name="btitle"
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
