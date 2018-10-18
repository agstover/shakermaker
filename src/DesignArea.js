import React from 'react'
import withStore from './store/withStore'
import {observer} from 'mobx-react'
import {css} from 'emotion'
import _ from 'lodash'

const style = css`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  height: calc(100% - 80px);
  justify-content: center;
  overflow: hidden;
`

class DesignArea extends React.Component {
  constructor(props) {
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this)
  }
  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', _.debounce(this.updateDimensions,500))
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  updateDimensions() {
    const {store} = this.props
    const height = this.divElement.clientHeight
    const width = this.divElement.clientWidth
    store.updateDimensions({height,width})
  }
  render() {
    const {children, store} = this.props
    const {designAreaDimensions} = store
    const {width, height} = designAreaDimensions
    return(
      <div id='DesignArea' ref={divElement => this.divElement = divElement} className={style}>
         {React.cloneElement(children, { width, height })}
      </div>
    )
  }
}

// 703.19 px
//
// width: 34%;
// height: 40%;
// top: 302px; 43% 
// left: 227px; 32.2%

export default withStore(observer(DesignArea))
