import React, { Component } from 'react';
import Aux from './hoc/Auxiliary';
import Header from './components/Header/Header';
import Course from './components/Course/Course';
import SideDrawer from './components/Header/DrawerToggle/SideDrawer/SideDrawer';

class App extends Component {

  state = {
    showSideDrawer: true
  }

  openSideDrawerHandler = () => {
    this.setState({showSideDrawer: true});
  }

  closeSideDrawerHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <Aux>
        <Header openSideDrawer={this.openSideDrawerHandler} />
        <SideDrawer 
          show={this.state.showSideDrawer} 
          closed={this.closeSideDrawerHandler}/>
        <main>
          <Course />
        </main>
        <div>Footer</div>
      </Aux>

    )
  }
}

export default App;