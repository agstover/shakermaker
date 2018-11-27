import React from 'react'
import MainPanel from '../MainPanel'
import SidePanel from '../SidePanel'
import {css} from 'react-emotion'

const style = css`
  min-height: 100vh;
  display: flex;
`

const Maker = () => {
    return (
      <div className={style}>
        <SidePanel/>
        <MainPanel />
      </div>
    );
}

export default Maker