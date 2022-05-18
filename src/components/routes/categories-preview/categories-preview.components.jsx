import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from './../../category-preview/category-preview.components';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  //   console.log('categoriesMapObj', Object.keys(categoriesMap));
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
