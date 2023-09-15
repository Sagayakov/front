import { Favorite } from 'shared/ui/icons/icons-tools/Favorite';
import { PopularAdvertsCartStyle } from './PopularAdvertsCart.style';
import { PopularAdvertsDescription } from './PopularAdvertsDescription.style';

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
      <img width="295px" height="239px" src={image} alt="img" />
      <PopularAdvertsDescription>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}>
          <p
            style={{
              color: '#1F6FDE',
              fontSize: '18px',
              fontWeight: '700',
              letterSpacing: '4px',
            }}>
            {price}
          </p>
          <Favorite color="red" strokeColor="red" />
        </div>
        <p
          style={{ marginBottom: '14px', fontSize: '18px', fontWeight: '700' }}>
          {description}
        </p>
        <p style={{ fontSize: '14px', color: '#8F8F8F' }}>{time}</p>
      </PopularAdvertsDescription>
    </PopularAdvertsCartStyle>
  );
};
