import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import { useState } from 'react';

function App() {

  const[notes, setNotes] = useState([]);


  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
