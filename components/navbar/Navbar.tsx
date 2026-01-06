import Container from '../global/Container';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';

const Navbar = () => {
  return (
    <div className='border-b'>
      <Container className={containerStyles}>
        <Logo />
        <NavSearch />
        <div className='flex gap-4 items-center'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

const containerStyles =
  'flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4';
