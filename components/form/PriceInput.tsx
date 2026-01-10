import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { faker } from '@faker-js/faker';

const name = 'price';
type FormInputNumberProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  const price = faker.number.int({ min: 100, max: 999 });

  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Price (£)
      </Label>
      <Input
        id={name}
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue || price}
        required
      />
    </div>
  );
};

export default PriceInput;
