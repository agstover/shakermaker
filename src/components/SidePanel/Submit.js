import React from 'react'
import {css} from 'react-emotion'
import ButtonStyle from '../../css/ButtonStyle'


const outerDiv = css`
    position: relative;
    height: 100%;
`

const innerDiv = css`
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
`

const Submit = () => (
  <div className={outerDiv}>
    <div className={innerDiv}>
        <button className={ButtonStyle}>SUBMIT YOUR SHAKER</button>
    </div>
  </div>
)

export default Submit