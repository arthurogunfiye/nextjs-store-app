import { fetchAdminProductDetails, updateProductAction } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/CheckboxInput';

const EditProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  const { name, company, description, featured, price } = product;
  return (
    <section>
      <h1 className={h1Styles}>update product</h1>
      <div className='border p-8 rounded'>
        {/* IMAGE INPUT CONTAINER */}
        <FormContainer action={updateProductAction}>
          <div className={formDivStyles}>
            <input type='hidden' name='id' value={id} />
            <FormInput
              type='text'
              name='name'
              label='product name'
              defaultValue={name}
            ></FormInput>
            <FormInput
              type='text'
              name='company'
              defaultValue={company}
            ></FormInput>
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name='description'
            labelText='product description'
            defaultValue={description}
          />
          <div className='mt-6'>
            <CheckboxInput
              name='featured'
              label='featured'
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text='update product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
};

export default EditProductPage;

const h1Styles = 'text-2xl font-semibold mb-8 capitalize';
const formDivStyles = 'grid gap-4 md:grid-cols-2 my-4';
