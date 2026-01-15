import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavouriteId } from '@/utils/actions';
import FavoriteToggleForm from './FavoriteToggleForm';

const FavoriteToggleButton = async ({ productId }: { productId: string }) => {
  const { userId } = auth();

  if (!userId) return <CardSignInButton />;

  const favouriteId = await fetchFavouriteId({ productId });

  return <FavoriteToggleForm favouriteId={favouriteId} productId={productId} />;
};

export default FavoriteToggleButton;
