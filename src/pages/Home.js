import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'scss/Home.scss';
import Menu from 'components/Menu';
class Home extends Component {
  render() {
    return (
      <>
        <Menu path={this.props.location.pathname} />
        <div className="home">
          <h2 className="hello">Hello, I'm Jonghyung.</h2>
          <p className="desc">I'm a front-end-web-developer.</p>
          <p className="desc">
            If you want to know me more, please click the button below.
          </p>
          <div className="details">
            <Link to="/about">
              <button className="detailBtn">Wanna know me?</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
