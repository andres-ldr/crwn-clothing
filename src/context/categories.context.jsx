import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoreisMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoreisMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
