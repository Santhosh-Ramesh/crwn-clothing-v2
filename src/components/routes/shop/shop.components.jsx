import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from './../../routes/categories-preview/categories-preview.components';
import Category from './../../routes/category/category.components';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../../store/categories/categories.action';
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
