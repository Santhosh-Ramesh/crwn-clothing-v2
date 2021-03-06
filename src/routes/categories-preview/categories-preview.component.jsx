import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.components';

import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const IsLoading = useSelector(selectIsLoading);
  console.log("preview loading",IsLoading)
  return (
    <Fragment>
      {IsLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
