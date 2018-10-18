import {inject, Provider} from 'mobx-react'
import {initStore} from '.'
import React from 'react'

export default function withStore(BaseComponent) {
  BaseComponent = inject('store')(BaseComponent)

  class App extends React.Component {
    constructor() {
      super()
      this.store = initStore()
    }
    store
    render() {
      return (
        <Provider store={this.store}>
          <BaseComponent {...this.props} />
        </Provider>
      )
    }
  }

  return App
}
