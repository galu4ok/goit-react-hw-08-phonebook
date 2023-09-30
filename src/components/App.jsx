import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';
import { ContactsCounter } from './ContactsCounter/ContactsCounter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <ContactsCounter />
      <GlobalStyle />
    </>
  );
};
