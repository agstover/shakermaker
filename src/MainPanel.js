import React from 'react'
import DesignBase from './DesignBase'
import DesignArea from './DesignArea'
import {css} from 'react-emotion'

const style = css`
  background-color: #fff;
  flex: 1 1 auto;
  overflow-y: scroll;
  position: relative;
`

const MainPanel = () => (
  <div className={style} id='MainPanel'>
    <DesignArea>
      <DesignBase />
    </DesignArea>
  </div>
)

export default MainPanel
