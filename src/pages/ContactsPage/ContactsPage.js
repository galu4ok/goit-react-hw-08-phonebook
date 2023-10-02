import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { ContactsCounter } from 'components/ContactsCounter/ContactsCounter';

const Contacts = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  // Викликаємо операцію (асинхронний генератор екшену)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // Рендеримо розмітку в залежності від значень у стані
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress... </b>}
      <ContactsList />
      <ContactsCounter />
    </>
  );
};
export default Contacts;
