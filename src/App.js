import React, { useState } from 'react';
import './App.css';
import { Sirecomponent } from './components/sirecomponent';
import { Damcomponent } from './components/damcomponent';
import { FoalComponent } from './components/foalcomponent';

function App() {
  const [mareGenotype, setMareGenotype] = useState({
    extension: { allele1: 'E', allele2: 'E' },
    agouti: { allele1: 'A', allele2: 'A' },
    dun: { allele1: 'n', allele2: 'n' }
  });

  const [stallionGenotype, setStallionGenotype] = useState({
    extension: { allele1: 'E', allele2: 'E' },
    agouti: { allele1: 'A', allele2: 'A' },
    dun: { allele1: 'n', allele2: 'n' }
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