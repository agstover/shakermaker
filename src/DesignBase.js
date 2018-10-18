import React, { Component } from 'react';
import ShakerPattern from './ShakerPattern'
import withStore from './store/withStore'
import {observer} from 'mobx-react'

import './css/DesignSVG.css'
import styled, {css} from 'react-emotion'
import SVG from 'svg.js'
import 'svg.draggable.js'
import 'svg.select.js'
import 'svg.resize.js'



const DesignBaseSize = props => {
  const {parentWidth, parentHeight} = props
  console.log("parentHeight", parentHeight);
  const side = parentHeight * .7
  return (  css`
      width: ${side}px;
      height: ${side}px;
    `)
}


const BaseDiv = styled('div')`
  ${DesignBaseSize}
  background-color: rgb(255, 255, 255);
  opacity: 1;
  display: inline-block;
  position: relative;
  user-select: none;
  z-index: 1;
`
const styleSVG = css`
  position: absolute;
  z-index: 2;
`

class DesignBase extends Component {
  constructor(props) {
    super(props)
    this.calculateDimensions = this.calculateDimensions.bind(this)
  }
  calculateDimensions(height) {
    const calculateDimension = (multiplier) => `${height * multiplier}px`
    return ({
      height: calculateDimension(.28),
      width: calculateDimension(.23),
      top: calculateDimension(.3),
      left: calculateDimension(.23)
    })
  }
  componentDidMount() {
    const {store, height, width} = this.props
    const style = this.calculateDimensions(height)
    const draw = SVG('DesignBase')
    draw.attr('id','designZone')
    draw.style(style)
    draw.addClass(styleSVG)
    draw.rect(100, 100).attr({ fill: '#f06' }).draggable().selectize().resize()
  }

  componentDidUpdate(prevProps) {
    const {height, width} = this.props
    const style = this.calculateDimensions(height)
    const draw = SVG.get('designZone')
    draw.style(style)
  }
  render() {
    const {width, height} = this.props
    console.log("Height", height);
    return (
      <BaseDiv parentWidth={width} parentHeight={height} id='DesignBase'>
        <ShakerPattern />
      </BaseDiv>
    );
  }
}

export default withStore(observer(DesignBase))
