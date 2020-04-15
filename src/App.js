import React, { Component } from 'react';
import Aux from './hoc/Auxiliary';
import Header from './components/Header/Header';
import Course from './components/Course/Course';
import SideDrawer from './components/Header/DrawerToggle/SideDrawer/SideDrawer';

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <SideDrawer />
        <main>
          <Course />
        </main>
        <div>Footer</div>
      </Aux>

    )
  }
}

export default App;