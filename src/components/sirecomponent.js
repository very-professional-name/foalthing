import React from 'react'
import { useState } from 'react';

export function Sirecomponent(props) {
    const [stallionGenotype, setStallionGenotype] = useState({
        extension1: 'E',
        extension2: 'E'
    });
    const handleGenotypeChange = (gene, value) => {

        setStallionGenotype(prevState => ({
            ...prevState,
            [gene]: value // Update the value of the selected gene
        }));
        
    };

    return (
        <div>
        <form className="box">
       <label for="extension">Choose extension:</label>

       <select name="extension1" id="extension1" onChange={(e) => handleGenotypeChange('extension1', e.target.value)}>
           <option value="E">E</option>
           <option value="e">e</option>
           
       </select>
       <select name="extension2" id="extension2" onChange={(e) => handleGenotypeChange('extension2', e.target.value)}>
           <option value="E">E</option>
           <option value="e">e</option>
           
       </select>
   </form>
   <p> Current genotype:

   </p>
   <p>
       {stallionGenotype.extension1} {stallionGenotype.extension2}
   </p>
   
   </div>
    )
}
