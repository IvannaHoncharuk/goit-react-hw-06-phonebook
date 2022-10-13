import { Phonebook } from "./Phonebook/Phonebook";
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { ContactsList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';


export const App = () => {
    return (
      <>
        <GlobalStyle />
        <Section title="Phonebook">
          <Phonebook />
        </Section>
        <Section title="Contacts">
          <Filter/>
          <ContactsList/>
        </Section>
      </>
    );
};
