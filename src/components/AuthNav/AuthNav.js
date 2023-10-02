import { ImUser, ImEnter } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import { Container } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <NavLink to="/register">
        <ImUser style={{ size: 210, margin: '0 10 0 0' }} />
        Register
      </NavLink>
      <NavLink to="/login">
        <ImEnter style={{ size: 210, margin: '0 10 0 0' }} />
        LogIn
      </NavLink>
    </Container>
  );
};
