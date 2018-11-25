import React from 'react'
import {css} from 'react-emotion'
import Section from './Section'
import withStore from '../../store/withStore'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import _ from 'lodash'

const lineStyle = css`
  font-size: 1.5em;
  display: block;
  border: none;
  color: #333;
  background: transparent;
  border-bottom: 1px dotted black;
  padding: 5px 2px 0 2px;
  &focus: {
    outline: none;
    border-color: #51CBEE;
  }

`
class Colors extends React.Component {
  constructor(props) {
    super(props)
  }
  textVal = observable.box('')

  render() {
    const {store} = this.props
    const setText = (val) => {
      this.textVal.set(val)
    }
    const setName = (val) => {
      if(val==='') return store.setShakerName(null)
      store.setShakerName(val.trim())
    }
    const handleEnter = e => {
      if(e.key === 'Enter') {
        setName(e.target.value)
        console.log("THIS IS INIPUT", this.nameInput)
        this.nameInput.blur()
      }
    }
    return (
      <Section>
        <input 
          className={lineStyle} 
          placeholder="Name your shaker" 
          type='text' 
          value={this.textVal}
          onChange={e => setText(e.target.value)}
          onBlur={e => setName(e.target.value)}
          onKeyPress={handleEnter}
          ref={c => this.nameInput = c}
        />
      </Section>   
    )
  }
}


export default withStore(observer(Colors))
