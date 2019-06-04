import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Portfolio, Contact, About } from 'pages';
import Menu from 'components/Menu';
import Footer from 'components/Footer';

const list = document.getElementsByClassName('link');
class App extends Component {
  componentDidMount() {
    const item = document.querySelectorAll('a');
    list.item('0').addEventListener('click', () => {
      item[0].style.color = 'crimson';
      item[1].style.color = 'black';
      item[2].style.color = 'black';
      item[3].style.color = 'black';
    });
    list.item('1').addEventListener('click', () => {
      item[0].style.color = 'black';
      item[1].style.color = 'crimson';
      item[2].style.color = 'black';
      item[3].style.color = 'black';
    });
    list.item('2').addEventListener('click', () => {
      item[0].style.color = 'black';
      item[1].style.color = 'black';
      item[2].style.color = 'crimson';
      item[3].style.color = 'black';
    });
    list.item('3').addEventListener('click', () => {
      item[0].style.color = 'black';
      item[1].style.color = 'black';
      item[2].style.color = 'black';
      item[3].style.color = 'crimson';
    });
    const path = window.location.pathname;
    if (path === '/') {
      item[0].style.color = 'crimson';
      item[1].style.color = 'black';
      item[2].style.color = 'black';
      item[3].style.color = 'black';
    } else if (path === '/about') {
      item[0].style.color = 'black';
      item[1].style.color = 'crimson';
      item[2].style.color = 'black';
      item[3].style.color = 'black';
    } else if (path === '/works') {
      item[0].style.color = 'black';
      item[1].style.color = 'black';
      item[2].style.color = 'crimson';
      item[3].style.color = 'black';
    } else if (path === '/contact') {
      item[0].style.color = 'black';
      item[1].style.color = 'black';
      item[2].style.color = 'black';
      item[3].style.color = 'crimson';
    }
  }
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/works" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    );
  }
}

export default App;
