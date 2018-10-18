import {observable, action, decorate} from 'mobx'

class Store {
  constructor() {
    this.designAreaDimensions = {
      height: 0,
      width: 0
    }
    // this.SVGParent = null
  }
  updateDimensions({height, width}) {
    this.designAreaDimensions = {
      height,
      width
    }
  }
  // setSVGRef(node) {
  //   console.log("This is node", node);
  //   console.log("This is this", this);
  //   this.SVGParent = node
  // }
}

decorate(Store, {
  designAreaDimensions: observable,
  SVGParent: observable,

  updateDimensions: action,
  // setSVGRef: action
})

let store = null

function initStore(initialState = {}) {
  if(store===null) {
    store = new Store()
  }
  return store
}

function getStore() {
  return store
}

export {Store, initStore, getStore}
