import React from 'react'
import {css} from 'react-emotion'
import Section from './Section'
import Button from './ShakerColorButton'

const colors = [
  {name: 'black',color:'000'},
  {name: 'white', color:'fff'},
  {name: 'red', color: 'ff4b4b'},
  {name: 'orange', color: 'ff6f09'},
  {name: 'green', color: '41a229'}
]

const Colors = () => (
  <div className={css`padding-top:50px;`}>
    <Section>
      <h1>Pick a shaker color</h1>
      {colors.map(color => (<Button key={color.color} name={color.name} color={color.color} />))}
    </Section>
  </div>
)

export default Colors
