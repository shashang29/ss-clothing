import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD4Sf31udliNmcUH9sweEEN617ucxSACY0",
  authDomain: "ss-db-51e17.firebaseapp.com",
  databaseURL: "https://ss-db-51e17.firebaseio.com",
  projectId: "ss-db-51e17",
  storageBucket: "ss-db-51e17.appspot.com",
  messagingSenderId: "718200844218",
  appId: "1:718200844218:web:26daa6a5229d97ed7bb783",
  measurementId: "G-4XT8PPHKVH"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (key, objectsToAdd) => {
  const collectionRef = firestore.collection(key);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const fetchCollectionRequest = async () => {
  const collectionRef = firestore.collection('collection');
  const snapShot = await collectionRef.get()
  const collectionsMap = await convertCollectionSnapshotToMap(snapShot);
  return collectionsMap;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




