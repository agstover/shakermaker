import {observable, action, decorate, computed} from 'mobx'
import {getImgUrl} from '../firebase'

class Store {
  constructor() {
    this.designAreaDimensions = {
      height: 0,
      width: 0
    }
    this.shakerColor = 'fff'
    // this.uploadingImage = false
    // this.uploadingImageProgress = 0
    this.image = {
      uploading: false,
      progress: 0,
      filename: null,
      url: null
    }
    this.shakerName = null
  }
  updateDimensions({height, width}) {
    this.designAreaDimensions = {
      height,
      width
    }
  }
  addImage(url) {
    this.image.url = url
  }
  removeImage() {
    this.image.url = null
  }
  startUpload() {
    this.image.uploading = true
    this.image.progress = 0
  }
  updateUploadProgress(progress) {
    this.image.progress = progress
  }

  uploadSuccess(filename) {
    this.image.filename = filename
    return getImgUrl(filename)
    .then(url => this.image.url = url)
    .catch(this.uploadError.bind(this))
    // console.log('This is the file uploaded', file)
    // const URL = await uploadImage(file)
    // console.log('This is the URL returned from Firebase', URL)
    // this.imageURL = URL
  }

  uploadError(err) {
    console.log('this from the error', this)
    console.log("There was an error uploading image", err)
    this.uploadingImage = false
  }

  setShakerColor(color) {
    this.shakerColor = color
  }
  setShakerName(name) {
    this.shakerName = name
  }
  get designBaseSide() {
    return this.designAreaDimensions.height * .7
  }

}

decorate(Store, {
  designAreaDimensions: observable,
  shakerColor: observable,
  shakerName: observable,
  uploadingImageProgress: observable,
  image: observable,

  updateDimensions: action,
  addImage: action,
  removeImage: action,
  startUpload: action,
  updateUploadProgress: action,
  uploadSuccess: action,
  uploadError: action,
  setShakerColor: action,
  setShakerName: action,

  designBaseSide: computed
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
