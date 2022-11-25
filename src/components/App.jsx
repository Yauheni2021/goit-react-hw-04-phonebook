
import { Box } from "./Box";
import { Filter } from "./Filter/Filter";
import { ContactForm } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";
import { useState, useEffect } from "react";


export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (JSON.parse(localStorage.getItem('contacts')) || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
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
    
  

  const addContact = (values) => {
    if (contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase());
    {
      alert(`${values.name} is already in contacts.`);
      return;
    };
        setContacts([ values , ...contacts])
    }
    ;
  
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


  // const addContact = (name, number) => {
  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts.`);
  //     return;
  //   } else if (contacts.find(item => item.number === number)) {
  //     alert(`${number} is already in contacts.`);
  //     return;
  //   }
  //   setContacts(contacts => [{ name, number }, ...contacts]);
  // };

  // const addContact = values => {
  //   if (contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase()
  //   )) {
  //     alert(`${values.name} is already in contacts.`);
  //     return;
  //   };
  //   setContacts(contacts => [{values}, ...contacts]
  //   );
  // };

