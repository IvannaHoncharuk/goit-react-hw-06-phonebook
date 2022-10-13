import PropTypes from 'prop-types';
import { Contact } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../../redux/slice';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = contactIdToDelete => {
    dispatch(removeContact(contactIdToDelete));
  };

  return (
    <Contact>
      {name}: {number}{' '}
      <button type="button" onClick={() => deleteContact(id)} data-id={id}>
        Delete
      </button>
    </Contact>
  );
};

ContactsItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};