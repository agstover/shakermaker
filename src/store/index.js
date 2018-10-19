import {observable, action, decorate} from 'mobx'

class Store {
  constructor() {
    this.designAreaDimensions = {
      height: 0,
      width: 0
    }
    this.shakerColor = 'fff'
  }
  updateDimensions({height, width}) {
    this.designAreaDimensions = {
      height,
      width
    }
  }
  setShakerColor(color) {
    this.shakerColor = color
  }
  uploadImage(file) {
    this.isUploadingImg = true

    const formData = new FormData()

    formData.append('file', file)

    // fetch(`${API_URL}/image-upload`, {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(res => res.json())
    // .then(images => {
    //   this.isUploadingImg = false
    //   this.image = image
    // })
  }
}

decorate(Store, {
  designAreaDimensions: observable,
  shakerColor: observable,
  isUploadingImg: observable,

  updateDimensions: action,
  setShakerColor: action,
  uploadImage: action
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
