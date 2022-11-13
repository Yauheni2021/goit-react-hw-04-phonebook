import { ContactItem, ContactBtn } from '../Contacts/Contacts.styled';

export const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <ContactItem>
      <p>{name}:</p>
      <p>{number}</p>
      <ContactBtn id={id} onClick={() => onClick(id)}>
        Delete
      </ContactBtn>
    </ContactItem>
  );
};