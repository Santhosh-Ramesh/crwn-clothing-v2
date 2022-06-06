import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';

import { setCategories } from '../../../store/categories/categories.action';

import { useDispatch } from 'react-redux';
import CategoriesPreview from './../../routes/categories-preview/categories-preview.components';
import Category from './../../routes/category/category.components';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      console.log("shop ulla ", categoriesArray)
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
