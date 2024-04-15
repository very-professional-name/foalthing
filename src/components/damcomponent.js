export function Damcomponent({ mareGenotype, setMareGenotype }) {

    const handleGenotypeChange = (gene, value) => {
        // Splitting the gene string to extract the gene and allele number
        const [geneType, allele] = gene.split('_');
        setMareGenotype(prevState => ({
            ...prevState,
            [geneType]: {
                ...prevState[geneType],
                [allele]: value // Update the value of the selected allele
            }
        }));
    };

    return (
        <div className='box'>
            <form className="">
                <p for="extension">Choose extension:</p>
                <select name="extension_allele1" id="extension_allele1" onChange={(e) => handleGenotypeChange('extension_allele1', e.target.value)}>
                    <option value="E">E</option>
                    <option value="e">e</option>
                </select>
                <select name="extension_allele2" id="extension_allele2" onChange={(e) => handleGenotypeChange('extension_allele2', e.target.value)}>
                    <option value="E">E</option>
                    <option value="e">e</option>
                </select>
                <p for="agouti">Choose agouti:</p>
                <select name="agouti_allele1" id="agouti_allele1" onChange={(e) => handleGenotypeChange('agouti_allele1', e.target.value)}>
                    <option value="A">A</option>
                    <option value="a">a</option>
                </select>
                <select name="agouti_allele2" id="agouti_allele2" onChange={(e) => handleGenotypeChange('agouti_allele2', e.target.value)}>
                    <option value="A">A</option>
                    <option value="a">a</option>
                </select>
                <p for="dun">Choose dun:</p>
                <select name="dun_allele1" id="dun_allele1" onChange={(e) => handleGenotypeChange('dun_allele1', e.target.value)}>
                    <option value="n">n</option>
                    <option value="D">D</option>
                    <option value="nd1">nd1</option>
                    
                </select>
                <select name="dun_allele2" id="dun_allele2" onChange={(e) => handleGenotypeChange('dun_allele2', e.target.value)}>
                <option value="n">n</option>
                    <option value="D">D</option>
                    <option value="nd1">nd1</option>
                </select>
            </form>
            <p> Current genotype:</p>
            <p>
                {mareGenotype.extension.allele1} 
                {mareGenotype.extension.allele2} 
                {mareGenotype.agouti.allele1} 
                {mareGenotype.agouti.allele2}    
                {mareGenotype.dun.allele1} 
                {mareGenotype.dun.allele2}    
            </p>
        </div>
    )
}