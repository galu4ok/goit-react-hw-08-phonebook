import { ImHome, ImAddressBook } from 'react-icons/im';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLink to="/">
        <ImHome style={{ size: 210, margin: '0 10 0 0' }} />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <ImAddressBook style={{ size: 210, margin: '0 10 0 0' }} />
          Contacts
        </NavLink>
      )}
    </Nav>
  );
};
