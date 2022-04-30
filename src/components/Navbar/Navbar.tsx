import { NavLink } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineStar,
  AiOutlineSearch,
  AiOutlineSetting,
} from 'react-icons/ai';
import { Aside, Nav } from './Navbar.style';

const Navbar = () => {
  return (
    <Aside>
      <Nav>
        <NavLink to='/'>
          <AiOutlineHome />
        </NavLink>
        <NavLink to='favorite'>
          <AiOutlineStar />
        </NavLink>
        <NavLink to='search'>
          <AiOutlineSearch />
        </NavLink>
        <NavLink to='setting'>
          <AiOutlineSetting />
        </NavLink>
      </Nav>
    </Aside>
  );
};

export default Navbar;
