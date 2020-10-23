import React from 'react';
import Contact from './components/Contact.js';
import Contactlist from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/54.jpg"
        name="Medhi Tairané"
        
        />
        <Contact 
        avatar="https://randomuser.me/api/portraits/women/82.jpg"
        name="Esther Miné-sevakarme"
        
        />
        <Contact 
        avatar="https://randomuser.me/api/portraits/men/17.jpg"
        name="Paul Lonais"
        online={true}
        />
     
    </div>
  );
}

export default App;