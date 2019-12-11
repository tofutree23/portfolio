import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Portfolio, Contact, About } from 'pages';
import Footer from 'components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/works" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
