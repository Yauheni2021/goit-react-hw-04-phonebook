import { PropTypes } from "prop-types";
import { nanoid } from "nanoid";
import {
    PhonebookForm,
    PhonebookLabel,
    PhonebookInput,
    PhonebookButton,
} from './Phonebook.styled';

import { useState } from "react";

export const ContactForm = ({ onAddContact }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        onAddContact({ name: name, number: number, id: nanoid(10) });
        reset();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value);
                break;
        
            default:
                return;
        }
    };


    const reset = () => {
        setName('')
        setNumber('')
    };

    return (
        <PhonebookForm autoComplete='off' onSubmit={handleSubmit}>
            <PhonebookLabel htmlFor='name'>
                Name:
                <PhonebookInput
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                >
                </PhonebookInput>
            </PhonebookLabel>
            <PhonebookLabel htmlFor="number">
                Number:
                <PhonebookInput
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                >
                </PhonebookInput>
            </PhonebookLabel>
            <PhonebookButton type="submit">Add Contact</PhonebookButton>
        </PhonebookForm>
    );
};

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
}










// const INIT_VALUES = {
//     number: '',
//     name: '',

// }

// export class ContactForm extends Component {
//     state = { ...INIT_VALUES };

//     static propTypes = {
//         onAddContact: PropTypes.func.isRequired,
//     };

//     handleChange = e => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value })
//     };

//     handleSubmit = e => {
//         const { onAddContact } = this.props
//         e.preventDefault();
//         onAddContact({ ...this.state, id: nanoid(10) })
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ ...INIT_VALUES });
//     };

//     render() {
//         const { name, number } = this.state;
//         return (
//             <PhonebookForm autoComplete='off' onSubmit={this.handleSubmit}>
//                 <PhonebookLabel htmlFor='name'>
//                     Name:
//                     <PhonebookInput
//                         type="text"
//                         name="name"
//                         value={name}
//                         onChange={this.handleChange}
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                     >
//                     </PhonebookInput>
//                 </PhonebookLabel>
//                 <PhonebookLabel htmlFor="number">
//                     Number:
//                     <PhonebookInput
//                         type="tel"
//                         name="number"
//                         value={number}
//                         onChange={this.handleChange}
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                     >
//                     </PhonebookInput>
//                 </PhonebookLabel>
//                 <PhonebookButton type="submit">Add Contact</PhonebookButton>
//             </PhonebookForm>
//         );
//     }
// };