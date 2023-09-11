import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';

// Shop component sets up routes for shop page using the Routes and Route components from react-router-dom. 
// It defines two routes: one for the root URL path ('/') that renders the CategoriesPreview component and 
// another for paths with a :category parameter that renders the Category component. 
// These routes enable navigation and dynamic content display on the shop page based on the selected category.

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;





*/
