import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Home Page</h1>
      <Button
        variant='outline'
        size='lg'
        className='capitalize m-8 rounded
      '
      >
        Click Me
      </Button>
    </div>
  );
};

export default HomePage;
