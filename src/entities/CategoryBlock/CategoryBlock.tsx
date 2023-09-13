import { CategoryList } from 'shared/ui/components/category/CategoryList/CategoryList';
import { CategoryNameStyle } from 'shared/ui/components/category/CategoryName.style';
import { CategoryBlockStyle } from './CategoryBlock.style';

export const CategoryBlock = () => {
  return (
    <CategoryBlockStyle>
      <CategoryNameStyle>Популярные категории</CategoryNameStyle>
      <CategoryList />
    </CategoryBlockStyle>
  );
};
