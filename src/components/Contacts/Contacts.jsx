import { ContactsItem } from './ContactItem/ContactItem';
import { Contacts } from './Contacts.styled';
import { useSelector } from 'react-redux';
import {
  selectContactsFilter,
  selectContactsItems,
} from '../../redux/slice';

export const ContactsList = () => {
  const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectContactsFilter);
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  return (
    <Contacts>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            id={id}
          />
        ))
      ) : (
        <li>No contacts</li>
      )}
    </Contacts>
  );
};

