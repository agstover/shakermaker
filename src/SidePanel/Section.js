import React from 'react'
import {css} from 'react-emotion'

const style = css`
  border-top: 1px solid #dfe0e6;
  border-bottom: 1px solid #dfe0e6;
  padding: 20px 20px;
  h1 {
    font-size: 20px;
    color: black;

  }
`

const Section = ({children}) => (
  <div className={style}>
    {children}
  </div>
)

export default Section
