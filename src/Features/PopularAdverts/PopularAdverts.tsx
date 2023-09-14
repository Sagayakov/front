import { data } from 'data/db';

import { PopularAdvertsWrapper } from 'entities/PopularAdverts/PopularAdvertsWrapper.style';
import { CategoryNameStyle } from 'shared/ui/components/category/CategoryName.style';
import { PopularAdvertsBlock } from './PopularAdverts.style';
import { PopularAdvertsCart } from 'entities/PopularAdverts/PopularAdvertsCart/PopularAdvertsCart';

interface Data {
        id: number
        image: string
        price: string
        description: string
        time: string
}

export const PopularAdverts = () => {
  return (
    <PopularAdvertsBlock>
      <CategoryNameStyle>Популярные объявления</CategoryNameStyle>
    <PopularAdvertsWrapper>
        {data.map((elem: Data) => (
            <PopularAdvertsCart key={elem.id} {...elem}/>
        ))}
    </PopularAdvertsWrapper>
    </PopularAdvertsBlock>
  );
};
