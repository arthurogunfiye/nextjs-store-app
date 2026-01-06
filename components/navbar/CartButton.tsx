import Link from 'next/link';
import { Button } from '../ui/button';
import { LuShoppingCart } from 'react-icons/lu';

const CartButton = () => {
  const numberOfItemsInCart = 9;
  return (
    <Button asChild variant='outline' size='icon' className={btnStyles}>
      <Link href='/cart'>
        <LuShoppingCart />
        <span className={spanStyles}>{numberOfItemsInCart}</span>
      </Link>
    </Button>
  );
};

export default CartButton;

const btnStyles = 'flex justify-center items-center relative';
const spanStyles =
  'absolute -top-3 -right-3 bg-primary text-white rounded-full size-6 flex items-center justify-center text-xs';
