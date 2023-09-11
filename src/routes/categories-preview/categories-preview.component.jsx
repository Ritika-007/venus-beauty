import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../context/categories.context';
// This line imports the CategoriesContext from a relative path. This context likely provides information about categories and their associated products.
import CategoryPreview from '../../components/category-preview/category-preview.component';

// CategoriesPreview component uses the CategoriesContext to access the categoriesMap and then maps over the keys of this map to render CategoryPreview components for each category. 
// This component is responsible for displaying previews of various categories and their associated products on a page.

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
