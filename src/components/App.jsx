
import { Box } from "./Box";
import { Filter } from "./Filter/Filter";
import { ContactForm } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";
import { useState, useEffect } from "react";



const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = evt => {
    setFilter(evt.target.value)
  };

  const filterItems = (arr, query) => {
    if (arr.lenght !== 0 || null) {
      let newArray = arr.filter(
        el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
      return newArray;
    }
    return;
  }
    
  // const addContact = values => {
  //   if (contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase()
  //   )) {
  //     alert(`${values.name} is already in contacts.`);
  //     return;
  //   };
  //   setContacts(contacts => [{values}, ...contacts]
  //   );
  // };

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (contacts.find(item => item.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    }
    setContacts(contacts => [{ name, number }, ...contacts]);
  };


const removeContact = id => {
    setContacts(prevState => {
      console.log(prevState);

      return prevState.filter(el => el.id !== id);
    });
  };


  return (
    <Box
      mt={4}
      mx={'auto'}
      px={4}
      py={5}
      display={'flex'}
      flexDirection="column"
      alignItems="center"
      width={3}
      borderRadius={'large'}
      bg={'secondary'}
    >
      <h1>PhoneBook</h1>
      <ContactForm onAddContact={addContact}></ContactForm>
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter
            title="Find contacts by name"
            value={filter}
            filterText={handleChange}
          />
          <Contacts
            contacts={filterItems(contacts, filter)}
            onRemoveContact={removeContact}
          />
        </>
      )}
    </Box>
  );
};




