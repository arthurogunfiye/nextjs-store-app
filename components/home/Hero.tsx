import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <section className={sectionStyles}>
      <div>
        <h1 className={h1Styles}>We are changing the way people shop</h1>
        <p className={paraStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora
          aspernatur dolor, molestias rerum sequi molestiae iste eos odio
          voluptatem dicta beatae nemo consequuntur distinctio doloribus sint
          alias voluptates ipsum!
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Explore Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;

const sectionStyles = 'grid grid-cols-1 lg:grid-cols-2 gap-24 items-center';
const h1Styles = 'max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl';
const paraStyles = 'mt-8 max-w-xl text-lg leading-8 text-muted-foreground';
