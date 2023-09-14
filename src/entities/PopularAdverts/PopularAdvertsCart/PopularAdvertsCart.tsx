import { PopularAdvertsCartStyle } from './PopularAdvertsCart.style';

interface Data {
  id: number;
  image: string;
  price: string;
  description: string;
  time: string;
}

export const PopularAdvertsCart = (props: Data) => {
  const { image, price, description, time } = props;
  return (
    <PopularAdvertsCartStyle>
      <img src={image} alt="img" />
      <p>{price}</p>
      <p>{description}</p>
      <p>{time}</p>
    </PopularAdvertsCartStyle>
  );
};
