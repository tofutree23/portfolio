import React, { Component } from 'react';
import "scss/Home.scss"

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2 className="hello">Hello, I'm Jonghyung.</h2>
                <p className="desc">I wanna be a front-end-web-developer.</p>
                <div className="details"><button className="btn">See details</button></div>
            </div>
        );
    }
}

export default Home;