import { BuySell } from 'shared/ui/icons/category/BuySell';
import { Currency } from 'shared/ui/icons/category/Currency';
import { Docs } from 'shared/ui/icons/category/Docs';
import { Excursion } from 'shared/ui/icons/category/Excursion';
import { Food } from 'shared/ui/icons/category/Food';
import { Job } from 'shared/ui/icons/category/Job';
import { Realty } from 'shared/ui/icons/category/Realty';
import { Service } from 'shared/ui/icons/category/Service';
import { Taxi } from 'shared/ui/icons/category/Taxi';
import { Transport } from 'shared/ui/icons/category/Transport';
import { ArrowRight } from 'shared/ui/icons/icons-tools/ArrowRight';
import { CategoryCartStyle } from '../CategoryCart/CategoryCart.style';
import { CategoryName } from '../CategoryCart/CategoryName.style';
import { QuantityOfCategories } from '../CategoryCart/QuantityOfCategories.style';
import { CategoryListStyle } from './CategoryList.style';

export const CategoryList = () => {
  return (
    <CategoryListStyle>
      <CategoryCartStyle gridarea="property" width={'295px'}>
        <Realty />
        <CategoryName>Аренда недвижимости</CategoryName>
        <QuantityOfCategories>
          115 предложений
          <ArrowRight color="#1F6FDE"/>
        </QuantityOfCategories>
      </CategoryCartStyle>
      <CategoryCartStyle gridarea="transport" width={'295px'}>
        <Transport />
        <CategoryName>Аренда транспорта</CategoryName>
        <QuantityOfCategories>
          115 предложений
          <ArrowRight color="#1F6FDE"/>
        </QuantityOfCategories>
      </CategoryCartStyle>
      <CategoryCartStyle gridarea="food" width={'190px'}>
        <Food />
        <CategoryName>Домашняя еда</CategoryName>
        <QuantityOfCategories>
          115 предложений
          <ArrowRight color="#1F6FDE"/>
        </QuantityOfCategories>
      </CategoryCartStyle>
      <CategoryCartStyle gridarea="doc" width={'190px'}>
        <Docs />
        <CategoryName>Документы</CategoryName>
        <QuantityOfCategories>
          115 предложений
          <ArrowRight color="#1F6FDE"/>
        </QuantityOfCategories>
      </CategoryCartStyle>
      <CategoryCartStyle gridarea="currency" width={'190px'}>
        <Currency />
        <CategoryName>Валютные пары</CategoryName>
        <QuantityOfCategories>
          115 предложений
          <ArrowRight color="#1F6FDE"/>
        </QuantityOfCategories>
      </CategoryCartStyle>
      <CategoryCartStyle gridarea="excursions" width={'190px'}>
        <Excursion />
        <CategoryName>Экскурсии</CategoryName>
        <QuantityOfCategories>
          115 предложений
          <ArrowRight color="#1F6FDE"/>
        </QuantityOfCategories>
      </CategoryCartStyle>
      <CategoryCartStyle gridarea="job" width={'190px'}>
        <Job />
        <CategoryName>Работа</CategoryName>
        <QuantityOfCategories>
          115 предложений
          <ArrowRight color="#1F6FDE"/>
        </QuantityOfCategories>
      </CategoryCartStyle>
      <CategoryCartStyle gridarea="taxi" width={'190px'}>
        <Taxi />
        <CategoryName>Такси</CategoryName>
        <QuantityOfCategories>
          115 предложений
          <ArrowRight color="#1F6FDE"/>
        </QuantityOfCategories>
      </CategoryCartStyle>
      <CategoryCartStyle gridarea="buy" width={'295px'}>
        <BuySell />
        <CategoryName>Покупка/продажа</CategoryName>
        <QuantityOfCategories>
          115 предложений
          <ArrowRight color="#1F6FDE"/>
        </QuantityOfCategories>
      </CategoryCartStyle>
      <CategoryCartStyle gridarea="service" width={'295px'}>
        <Service />
        <CategoryName>Услуги</CategoryName>
        <QuantityOfCategories>
          115 предложений
          <ArrowRight color="#1F6FDE"/>
        </QuantityOfCategories>
      </CategoryCartStyle>
    </CategoryListStyle>
  );
};
