import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact 
        image="https://randomuser.me/api/portraits/men/54.jpg"
        name="Medhi Tairané"
        online="online"
        />
        <Contact 
        image="https://randomuser.me/api/portraits/women/82.jpg"
        name="Esther Miné-sevakarme"
        online="offline"
        />
        <Contact 
        image="https://randomuser.me/api/portraits/men/17.jpg"
        name="Paul Lonais"
        online="online"
        />

    </div>
  );
}

export default App;
