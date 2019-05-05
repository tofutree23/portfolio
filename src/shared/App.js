import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Portfolio, Contact } from 'pages';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={ Home } />
                <Route exact path="/portfolio" component={ Portfolio } />
                <Route exact path="/contact" component={ Contact } />
                <Footer/>
            </div>
        );
    }
}

export default App;