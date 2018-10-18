import React, { Component } from 'react';
import { observer } from 'mobx-react';
import logo from './logo.svg';
import './css/App.css';
import withStore from './store/withStore'

import SidePanel from './SidePanel'
import MainPanel from './MainPanel'
import {css} from 'react-emotion'

const style = css`
  min-height: 100vh;
  display: flex;
`

class App extends Component {
  constructor(props) {
    super(props)
    // this.updateDimensions = this.updateDimensions.bind(this)
  }
  // componentDidMount() {
  //   const {store} = this.props
  //   window.addEventListener("resize", _.debounce(this.updateDimensions,400))
  // }
  //
  // componentWillUnmount() {
  //   const {store} = this.props
  //   window.removeEventListener("resize", store.updateDimensions)
  // }
  //
  // updateDimensions() {
  //   const {store} = this.props
  //   return store.updateDimensions({width:window.innerWidth, height: window.innerHeight})
  // }
  render() {
    return (
      <div className={style}>
        <SidePanel/>
        <MainPanel />
      </div>
    );
  }
}

export default App
