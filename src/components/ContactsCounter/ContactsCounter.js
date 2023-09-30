import { useSelector } from 'react-redux';
import { selectContactsCount } from 'redux/selectors';

export const ContactsCounter = () => {
  const count = useSelector(selectContactsCount);

  return (
    <div>
      <hr />
      <p>Contacts count: {count}</p>
    </div>
  );
};
