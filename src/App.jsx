import PersonList from './components/PersonList.jsx';
import { useState } from 'react';
import data from './data.js';

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today </h3>
        <PersonList people={people} />
        <button type="button" onClick={handleClick} className="btn btn-block">
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
