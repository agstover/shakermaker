import React, { Component } from 'react';
import ShakerPattern from './ShakerPattern'
import withStore from '../../store/withStore'
import {observer} from 'mobx-react'
import {autorun} from 'mobx'

import '../../css/DesignSVG.css'
import styled, {css} from 'react-emotion'
import SVG from 'svg.js'
import 'svg.draggable.js'
import 'svg.select.js'
import 'svg.resize.js'



const DesignBaseSize = props => {
  console.log("This is parent side", props.parentSide)
  const side = props.parentSide
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

const options = {
  resize: {
    saveAspectRatio: true,
    snapToGrid: .5
  },
  select: {
    points: ['rb']
  }
}

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
    const {store} = this.props
    // const style = this.calculateDimensions(store.designAreaDimensions.height)
    // const draw = SVG('DesignBase')
    // draw.attr('id','designZone')
    // draw.style(style)
    // draw.addClass(styleSVG)
    // const image = draw.image(img).loaded(function(loader) {
    //   this.size(loader.width, loader.height)
    // }).draggable().selectize(options.select).resize(options.resize)
// //    draw.rect(100, 100).attr({ fill: '#f06' }).draggable().selectize().resize()
    autorun(() => {
      const height = store.designAreaDimensions.height
      const draw = SVG.get('designZone')
      if(draw) {
        const style = this.calculateDimensions(height)
        return draw.style(style)
      }
    })
    autorun(() => {
      console.log("The image is changing")
      const imageUrl = store.image.url
      this.resetImage(imageUrl)
    })
  }
  // handleChangeImage = (e) => {
  //   const image = e.target.files[0]
  //   console.log("This is image", image)
  //   const url = URL.createObjectURL(image)
  //   this.resetImage(url)
  // }
  // handleUploadSuccess = (filename) => {

  // }
  // componentDidUpdate(prevProps) {
  //   console.log('Component updated...')
  //   const {height, width, image} = this.props

  //   //console.log('prevProps: ', prevProps)
  //   // gets the image if it exists
  //   const draw = SVG.get('designZone')
  //   // if the image changed, we reset it
  //   if(prevProps.image.url !== image.url) {
  //     return this.resetImage({draw, imageUrl: image.url})
  //   }
  //   // if there is a draw, recalculate the dimensions
  //   if(draw) {
  //     const style = this.calculateDimensions(height)
  //     return draw.style(style)
  //   }
  // }

  resetImage(imageUrl = null) {
    const draw = SVG.get('designZone')    
    if(draw) draw.remove()
    // create new draw
    if(imageUrl) {
      // I read that if you destructure like this, the store doesn't register w/autorun
      // which is exactly the behavior we want
      const {store:{designAreaDimensions:{height, width}}} = this.props
      const style = this.calculateDimensions(height)
      const draw = SVG('DesignBase')
      draw.attr('id','designZone')
      draw.style(style)
      draw.addClass(styleSVG)
      draw.image(imageUrl).loaded(function(loader) {
        console.log("This is the width", width)
        console.log('This is the loader width', loader.width)
        console.log("This is style.width", style.width)
        this.size(style.width, style.height)
        // this.size(loader.width, loader.height)
      }).draggable().selectize(options.select).resize(options.resize)
    }
  }
  render() {
    const {store} = this.props
    console.log("this is store", store.designBaseSide)
    return (
      <BaseDiv parentSide={store.designBaseSide} id='DesignBase'>
        <ShakerPattern />
      </BaseDiv>
    );
  }
}

export default withStore(observer(DesignBase))
