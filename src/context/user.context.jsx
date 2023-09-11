import { createContext, useState, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// This code creates a UserContext using the createContext function. It provides an initial context value with an object containing two properties: setCurrentUser and currentUser. 
// setCurrentUser is initialized as an empty function, and currentUser is initialized as null.

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// This code defines a functional component called UserProvider. 
// It takes children as a prop, which represents the child components that will be wrapped by the provider.

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
