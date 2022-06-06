import { CategoryContainer, CategoryTitle } from './category.styles';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  useState, useEffect, Fragment } from 'react';
import { selectCategoriesMap } from '../../../store/categories/categories.selector';
import ProductCard from '../../product-card/product-card.components';
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
