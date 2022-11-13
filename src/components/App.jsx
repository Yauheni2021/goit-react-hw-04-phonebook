import { Component } from "react";
import { Box } from "./Box";
import { Filter } from "./Filter/Filter";
import { ContactForm } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";


export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

    componentDidMount() {
    // const savedLocalData = localStorage.getItem('contacts');
    // const parsedLocalData = JSON.parse(savedLocalData);
    try {
      const savedLocalData = localStorage.getItem('contacts');
      const parsedLocalData =
        savedLocalData === null ? [] : JSON.parse(savedLocalData);
      return this.setState({ contacts: parsedLocalData });
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
    }
  
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts || null) {
      return localStorage.setItem(
        'contacts',
        JSON.stringify(this.state.contacts)
      );
    }
    return;
  }

  

   handleChange = evt => {
    this.setState({ filter: evt.target.value });
   };
  
  filterItems = (arr, query) => {
    let newArray = arr.filter(
      el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    return newArray;
  };

  addContact = values => {
    this.setState(prevState => {
      if (
        prevState.contacts.find(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        )
      ) {
        return alert(`${values.name} is already in contacts.`);
      } else {
        return { contacts: [...prevState.contacts, values] };
      }
    });
  };

  removeContact = id => {
    this.setState(prevState => {
      const newArray = prevState.contacts.filter(el => el.id !== id);
      return { contacts: newArray };
    });
  };

  render() {
    const { filter } = this.state;
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
        bg={'secondary'}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter
          title="Find contacts by name"
          value={filter}
          filterText={this.handleChange}
        ></Filter>
        <Contacts
          contacts={this.filterItems(this.state.contacts, filter)}
          onRemoveContact={this.removeContact}
        />
        </Box>
    )
  }
};