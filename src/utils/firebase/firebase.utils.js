//Each of these functions is designed to interact with Firebase Authentication and 
//Firestore to handle user authentication and data storage.
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
const firebaseConfig = {
  apiKey: "AIzaSyC7w_yvVEuYYb2CnVuKUJWbRRx6od_otM4",
  authDomain: "venus-beauty-db-ad336.firebaseapp.com",
  projectId: "venus-beauty-db-ad336",
  storageBucket: "venus-beauty-db-ad336.appspot.com",
  messagingSenderId: "894831753597",
  appId: "1:894831753597:web:016822bda3998249ca3414",
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

// A GoogleAuthProvider instance is created, which is used for Google sign-in. Also set custom parameters to specify that the user should be prompted 
// to select an account when signing in.
googleProvider.setCustomParameters({
  prompt: "select_account",
})


//Firebase Authentication (auth) and Firestore (db) instances are created using the corresponding functions getAuth and getFirestore
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
//These functions allow users to signin with Google using a popup or redirect, respectively.
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
export const db = getFirestore()

// takes a collection key and an array of objects to add to Firestore. 
//It creates a batch write operation to add multiple documents in a single transaction.
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

//function retrieves documents from a Firestore collection named "categories." It constructs a map of categories where the keys are category 
// titles converted to lowercase and the values are arrays of items.
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

// function is used to create a user document in Firestore based on the provided userAuth object (which typically represents a user
// who has signed in). It checks if the user document already exists, and if not, it creates one with information such as displayName, email, and createdAt.
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
// function is used to create a new user account with an email and password combination using Firebase Authentication.
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };
// function is used to sign in an  existing user with an email and password combination using Firebase Authentication.
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// function signs the current user out using Firebase Authentication.
export const signOutUser = async () => await signOut(auth)
//  function sets up an observer that listens for changes in the user's authentication state. It takes a callback function that will be called
// whenever the authentication state changes (e.g., when a user signs in or out).
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)



