import { formatCurrency } from '@/utils/format';
import { Product } from '@prisma/client';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className={parentDivStyles}>
      {products.map(product => {
        const { id: productId, name, price, image } = product;
        const poundsAmount = formatCurrency(price);
        return (
          <article key={productId} className='group relative'>
            <Link href={`/products/${productId}`}>
              <Card className={cardStyles}>
                <CardContent className='p-4'>
                  <div className={imgDivStyles}>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes={imgSizes}
                      priority
                      className={imgStyles}
                    />
                  </div>
                  <div className='mt-4 text-center'>
                    <h2 className='text-lg capitalize'>{name}</h2>
                    <p className='text-muted-foreground mt-2'>{poundsAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className='absolute top-7 right-7 z-5'>
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsGrid;

const parentDivStyles = 'pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3';
const cardStyles =
  'transform group-hover:shadow-xl transition-shadow duration-500';
const imgDivStyles = 'relative h-64 md:h-48 rounded overflow-hidden';
const imgSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
const imgStyles =
  'rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500';
