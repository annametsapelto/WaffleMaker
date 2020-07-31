import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
      showSidedrawer: true
    }

  sideDrawerClosedHandler = () => {
      this.setState({showSidedrawer: false})
  }
  render() {
    return ( 
      <Aux>
        <Toolbar></Toolbar>
        <SideDrawer open={this.state.showSidedrawer} closed={this.sideDrawerClosedHandler}/>
        <main className="Content">
          {this.props.children}
        </main>
      </Aux>
    )
  }
}


export default Layout;