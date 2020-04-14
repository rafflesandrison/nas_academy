import React, { Component } from 'react';
import Aux from './hoc/Auxiliary';
import Header from './components/Header/Header';
import Course from './components/Course/Course';

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main>
          <Course />
        </main>
        <div>Footer</div>
      </Aux>

    )
  }
}

export default App;