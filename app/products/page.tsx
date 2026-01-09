import ProductsContainer from '@/components/products/ProductsContainer';

interface SearchParamsProps {
  layout?: string;
  search?: string;
}

const ProductsPage = ({
  searchParams
}: {
  searchParams: SearchParamsProps;
}) => {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';

  return <ProductsContainer layout={layout} search={search} />;
};

export default ProductsPage;
