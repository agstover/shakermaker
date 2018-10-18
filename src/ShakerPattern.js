import React from 'react'
import {css} from 'emotion'
import img from './shaker.png'

const style = css`
  display: block;
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 3;
`

const ShakerPattern = () => <img className={style} src={img}/>

export default ShakerPattern
