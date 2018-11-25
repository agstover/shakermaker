import React from 'react'
import Section from './Section'
import withStore from '../../store/withStore'
import {observer} from 'mobx-react'
import firebase from '../../firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import ButtonStyle from '../../css/ButtonStyle'

// do all manipulations to store here
// the design base simply reacts to the store

// need a spinner
// will
class AddImg extends React.Component {
  constructor(props) {
    super(props)
  }
  handleChangeImage = (e) => {
    const {store} = this.props
    const image = e.target.files[0]
    const url = URL.createObjectURL(image)
    console.log("This is image", url)
    store.addImage(url) 
  }
  removeImage = () => {
    const {store} = this.props
    // TODO: Right here we need to find a way to clear the input element. Otherwise user can't upload same image twice in a row.
    return store.removeImage()
  }
  render() {
    const {store} = this.props
    return (
      <Section>          
          <CustomUploadButton
            hidden
            accept="image/*"
            name="shakerImg"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={() => store.startUpload()}
            onUploadError={(err) => store.uploadError(err)}
            onUploadSuccess={(file) => store.uploadSuccess(file)}
            onProgress={(progress) => store.updateUploadProgress(progress)}
            onChange={this.handleChangeImage}
            className={ButtonStyle}
          >
            {store.image.url 
              ? "Replace Image"
              : "Add Image"
            }
          </CustomUploadButton>
        {
          store.image.url
          ? <button className={ButtonStyle} onClick={this.removeImage}>Remove Image</button>
          : null
        }
      </Section>
    )
  }
}

export default withStore(observer(AddImg))
