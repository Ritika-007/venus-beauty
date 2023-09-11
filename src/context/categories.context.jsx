import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

// This code creates a CategoriesContext using the createContext function. It provides an initial context value with an empty object {}.

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  
// This useEffect hook is used for fetching and setting the categories map when the component mounts. It calls the getCategoriesMap function inside the effect.

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
