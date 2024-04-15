import { useState, useEffect } from "react";

export function FoalComponent({ mareGenotype, stallionGenotype }) {
    const [foalGenotypes, setFoalGenotypes] = useState([]);

    useEffect(() => {
        // Function to mix extension and agouti genes of both parents
        const mixGenes = (mareGenotype, stallionGenotype) => {
            const possibleFoalGenotypes = [];
        
            // Iterate through each allele of the mare's extension gene
            Object.entries(mareGenotype.extension).forEach(([mareExtensionAllele, mareExtensionValue]) => {
              // Iterate through each allele of the mare's agouti gene
              Object.entries(mareGenotype.agouti).forEach(([mareAgoutiAllele, mareAgoutiValue]) => {
                // Iterate through each allele of the mare's dun gene
                Object.entries(mareGenotype.dun).forEach(([mareDunAllele, mareDunValue]) => {
                  // Iterate through each allele of the stallion's extension gene
                  Object.entries(stallionGenotype.extension).forEach(([stallionExtensionAllele, stallionExtensionValue]) => {
                    // Iterate through each allele of the stallion's agouti gene
                    Object.entries(stallionGenotype.agouti).forEach(([stallionAgoutiAllele, stallionAgoutiValue]) => {
                      // Iterate through each allele of the stallion's dun gene
                      Object.entries(stallionGenotype.dun).forEach(([stallionDunAllele, stallionDunValue]) => {
                        // Construct all possible combinations of alleles for the foal's genotype
                        possibleFoalGenotypes.push({
                          extension: {
                            allele1: mareExtensionValue,
                            allele2: stallionExtensionValue
                          },
                          agouti: {
                            allele1: mareAgoutiValue,
                            allele2: stallionAgoutiValue
                          },
                          dun: {
                            allele1: mareDunValue,
                            allele2: stallionDunValue
                          }
                        });
                      });
                    });
                  });
                });
              });
            });
        
            return possibleFoalGenotypes;
          };

        // Calculate foal genotypes when either mareGenotype or stallionGenotype changes
        const calculateFoalGenotypes = () => {
            if (mareGenotype && stallionGenotype && mareGenotype.extension && stallionGenotype.extension && mareGenotype.agouti && stallionGenotype.agouti && stallionGenotype.dun && mareGenotype.dun) {
                const possibleFoalGenotypes = mixGenes(mareGenotype, stallionGenotype);
                setFoalGenotypes(possibleFoalGenotypes);
            } else {
                setFoalGenotypes([]);
            }
        };

        calculateFoalGenotypes();
    }, [mareGenotype, stallionGenotype]);

    return (
        <div>
            <h2>Possible Foal Genotypes:</h2>
            <ul>
                {foalGenotypes.map((foalGenotype, index) => (
                    <li key={index}>
                        {foalGenotype.extension && foalGenotype.agouti && foalGenotype.dun && (
                            <div>
                                <span>Genotype: {foalGenotype.extension.allele1}{foalGenotype.extension.allele2} {foalGenotype.agouti.allele1}{foalGenotype.agouti.allele2} {foalGenotype.dun.allele1}{foalGenotype.dun.allele2} </span>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}