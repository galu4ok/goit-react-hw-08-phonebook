import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { ImExit } from 'react-icons/im';
import { logOut } from 'redux/auth/operations';
import { LogOutBtn, Username, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <Username>Welcome to your Phone Book, {user.name}!</Username>
      <LogOutBtn type="button" onClick={handleLogOut}>
        <ImExit style={{ size: 210, margin: '0 10 0 0' }} />
        Logout
      </LogOutBtn>
    </Wrapper>
  );
};
