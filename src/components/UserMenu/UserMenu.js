import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <p>Welcome to your Phone Book,{user.name} </p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
