import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct } from '@/utils/actions';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import ProductRating from '@/components/single-product/ProductRating';

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const poundsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className={divStyles}>
        {/* IMAGE - FIRST COL */}
        <div className={imageDivStyles}>
          <Image
            src={image}
            alt={name}
            fill
            sizes={imgSizes}
            priority
            className={imageStyles}
          />
        </div>

        {/* PDT INFO - FIRST COL */}
        <div>
          <div className={pdtInfoDivStyles}>
            <h1 className={h1Styles}>{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h4 className='text-lg mt-2'>{company}</h4>
          <p className={firstParaStyles}>{poundsAmount}</p>
          <p className={secondParaStyles}>{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;

const divStyles = 'mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16';
const imageDivStyles = 'relative h-full';
const imgSizes = '(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw';
const imageStyles = 'w-full rounded object-cover';
const pdtInfoDivStyles = 'flex gap-x-8 items-center';
const h1Styles = 'capitalize text-3xl font-bold';
const firstParaStyles = 'mt-3 text-md bg-muted inline-block p-2 rounded';
const secondParaStyles = 'mt-6 leading-8 text-muted-foreground';
