import React, { useState } from 'react';
import './App.css';
import { Sirecomponent } from './components/sirecomponent';
import { Damcomponent } from './components/damcomponent';
import { FoalComponent } from './components/foalcomponent';

function App() {
  const [mareGenotype, setMareGenotype] = useState({
    extension1: 'E',
    extension2: 'E'
  });

  const [stallionGenotype, setStallionGenotype] = useState({
    extension1: 'E',
    extension2: 'E'
  });

  return (
    <div className="App">
      <div className='forms'>
        <div>
          <Sirecomponent stallionGenotype={stallionGenotype} setStallionGenotype={setStallionGenotype} />
        </div>
        <div>
          <Damcomponent mareGenotype={mareGenotype} setMareGenotype={setMareGenotype} />
        </div>
        <FoalComponent mareGenotype={mareGenotype} stallionGenotype={stallionGenotype} />
      </div>
    </div>
  );
}

export default App;