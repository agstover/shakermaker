import React from 'react'
import styled from 'react-emotion'

const Panel = styled('div')`
  background: #212032;
  display: flex;
  flex-direction: column;
  flex: 0 0 420px;
  position: relative;
  transition: flex .25s ease-in,transform .35s ease-in;
  z-index: 3;
`

const SidePanel = () => (
  <Panel id='SidePanel'>
    <h1>Shaker Maker</h1>
  </Panel>
)

export default SidePanel
