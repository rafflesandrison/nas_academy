import React, { Component } from 'react';
import Aux from './hoc/Auxiliary';
import Header from './components/Header/Header';
import Course from './components/Course/Course';
import SideDrawer from './components/Header/DrawerToggle/SideDrawer/SideDrawer';
import Footer from './components/Footer/Footer';

class App extends Component {

  state = {
    showSideDrawer: false
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
        <Footer />
      </Aux>

    )
  }
}

export default App;