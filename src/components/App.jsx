import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';
import { ContactsCounter } from './ContactsCounter/ContactsCounter';

export const App = () => {
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
      <GlobalStyle />
    </>
  );
};
