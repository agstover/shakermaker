import React from 'react'
import {css} from 'react-emotion'
import logo from '../../images/gfuellogo.png'


// const logoWrapper = css`
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   left: 0;
//   right: 0;
// `

const imgStyle = css`
display: block;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;

`

const Header = () => (
  <div>
    <img className={imgStyle} src={logo} />
  </div>
)

export default Header
