import { PropTypes } from "prop-types";
import { Box } from "components/Box";
import { ContactListItem } from './ContactsItem'

export const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <Box as="ul" mt={4} width="100%">
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={onRemoveContact}
          />
        );
      })}
    </Box>
  );
};


Contacts.prototype = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,

    onRemoveContacts: PropTypes.func.isRequired,
};