//Each of these functions is designed to interact with Firebase Authentication and 
//Firestore to handle user authentication and data storage in your Firebase project.
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from "firebase/firestore";
// Import statements for Firebase modules and functions from the Firebase library.
const firebaseConfig = {
  apiKey: "AIzaSyC7w_yvVEuYYb2CnVuKUJWbRRx6od_otM4",
  authDomain: "venus-beauty-db-ad336.firebaseapp.com",
  projectId: "venus-beauty-db-ad336",
  storageBucket: "venus-beauty-db-ad336.appspot.com",
  messagingSenderId: "894831753597",
  appId: "1:894831753597:web:016822bda3998249ca3414",
}
// firebaseConfig object: This object contains the configuration settings for your Firebase
// project, including the API key, authDomain, projectId, storageBucket, messagingSenderId, 
// and appId.
const firebaseApp = initializeApp(firebaseConfig)
// firebaseApp initialization: This line initializes your Firebase app with the provided configuration
// using initializeApp from Firebase.
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
})
// googleProvider initialization: A GoogleAuthProvider instance is created, which is used for
// Google sign-in. You also set custom parameters to specify that the user should be prompted 
// to select an account when signing in.


export const auth = getAuth()
//Firebase Authentication (auth) and Firestore (db) instances are created using the corresponding functions
//getAuth and getFirestore
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
// signInWithGooglePopup and signInWithGoogleRedirect functions are exported. These functions allow users to sign
// in with Google using a popup or redirect, respectively.
export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
} 
// addCollectionAndDocuments function: This function takes a collection key and an array 
// of objects to add to Firestore. 
//It creates a batch write operation to add multiple documents in a single transaction.
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, [])

  return categoryMap
}
// getCategoriesAndDocuments function: This function retrieves documents from a Firestore 
// collection named "categories." It constructs a map of categories where the keys are category 
// titles converted to lowercase and the values are arrays of items.
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef
}
// createUserDocumentFromAuth function: This function is used to create a user document 
// in Firestore based on the provided userAuth object (which typically represents a user
// who has signed in). It checks if the user document already exists, and if not, it creates 
//one with information such as displayName, email, and createdAt.
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };
// createAuthUserWithEmailAndPassword function: This function is used to create a new user
//  account with an email and password combination using Firebase Authentication.
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
// signInAuthUserWithEmailAndPassword function: This function is used to sign in an 
 // existing user with an email and password combination using Firebase Authentication.
export const signOutUser = async () => await signOut(auth)
// signOutUser function: This function signs the current user out using Firebase Authentication.
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
// onAuthStateChangedListener function: This function sets up an observer that listens for
//changes in the user's authentication state. It takes a callback function that will be called
//whenever the authentication state changes (e.g., when a user signs in or out).



