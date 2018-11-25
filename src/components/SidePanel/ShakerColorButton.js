import React from 'react'
import styled from 'react-emotion'
import withStore from '../../store/withStore'
import {observer} from 'mobx-react'

const ColorButton = styled('button')(props => ({
  backgroundColor: `#${props.color}`,
  width: '25px',
  height: '25px',
  margin: '0px 5px',
}))

const Button = ({store, name, color}) => {
  return (
    <ColorButton onClick={() => store.setShakerColor(color)} color={color}/>
  )
}

export default withStore(observer(Button))
