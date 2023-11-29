import { useState } from 'react';
import './App.css';
import PersonsList from './components/PersonsList/PersonsList';
import AddPerson from './components/Person/AddPerson';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AddPerson />
      <PersonsList />
    </div>
  );
}

export default App;
