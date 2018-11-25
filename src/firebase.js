import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyA_0dqbBkHHsclC7zkqHjn79jt2D3Qlwqo",
    authDomain: "shakermaker-358a9.firebaseapp.com",
    databaseURL: "https://shakermaker-358a9.firebaseio.com",
    projectId: "shakermaker-358a9",
    storageBucket: "shakermaker-358a9.appspot.com",
    messagingSenderId: "737284258858"
  });

// returns URL
export async function getImgUrl(filename) {
  return await firebase
    .storage()
    .ref("images")
    .child(filename)
    .getDownloadURL()
}

export default firebase