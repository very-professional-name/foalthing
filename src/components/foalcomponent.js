import React from 'react'

export function FoalComponent({mareGenotype, stallionGenotype}) {
    

    return (
        <>
            <div>
                <p>
                Mare Genotype: {JSON.stringify(mareGenotype)}
                </p>
                <p>
                stallionGenotype Genotype: {JSON.stringify(stallionGenotype)}
                </p>
            </div>
        </>
    )
}
