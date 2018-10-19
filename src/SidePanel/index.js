import React from 'react'
import styled from 'react-emotion'
import Header from './Header'
import Colors from './Colors'
import ChooseImg from './ChooseImg'

const Panel = styled('div')`
  background: #f7f8fc;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 0 0 420px;
  position: relative;
  transition: flex .25s ease-in,transform .35s ease-in;
  z-index: 3;
  -webkit-box-shadow: 6px 0 18px -7px #888;
  box-shadow: 6px 0 18px -7px #888;
  padding: 40px 0;
`

const SidePanel = () => (
  <Panel id='SidePanel'>
    <Header />
    <Colors />
    <ChooseImg />
  </Panel>
)

export default SidePanel
