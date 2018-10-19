import React from 'react'
import styled from 'react-emotion'
import img from './shaker.png'
import withStore from './store/withStore'
import {observer} from 'mobx-react'

const ShakerImage = styled('img')(({bgColor})=> ({
  backgroundColor: `#${bgColor}`,
  display: "block",
  height: "100%",
  pointerEvents: "none",
  position: "absolute",
  width: "100%",
  zIndex: 2,
}))

const ColorButton = styled('button')(props => ({
  backgroundColor: `#${props.color}`,
  width: '25px',
  height: '25px',
  margin: '0px 5px',
}))


const ShakerPattern = ({store}) => {
  return (
    <ShakerImage bgColor={store.shakerColor} src={img}/>
  )
}

export default withStore(observer(ShakerPattern))
