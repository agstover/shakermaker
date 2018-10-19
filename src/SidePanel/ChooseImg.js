import React from 'react'
import Section from './Section'
import withStore from '../store/withStore'
import {observer} from 'mobx-react'

// need a spinner
// will
class ChooseImg extends React.Component {
  constructor(props) {
    super(props)
  }
  uploadFile(e) {
    const files = Array.from(e.target.files)
    store.setLoadingFiles(true)
    const {store} = this.props
  }
  render() {
    return (
      <Section>
        <input type='file' onChange={() => this.uploadFile()}/>
      </Section>
    )
  }
}

export default withStore(observer(ChooseImg))
