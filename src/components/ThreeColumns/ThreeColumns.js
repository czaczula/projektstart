import React from 'react'
import '../ThreeColumns/_ThreeColumns.scss';

export default function ThreeColumns() {
    return (
        <div>
            <div className='ThreeColumnsBackground' id='ThreeColumns'>
                <div className='Col1' id='Col1'>
                    <h1>10</h1>
                    <h2>Oddanych worków</h2>
                    <h3>Lorem tabarolem</h3>
                </div>
                <div className='Col2' id='Col2'>
                    <h1>5</h1>
                    <h2>Wspartych organizacji</h2>
                    <h3>Lorem tabarolem</h3>
                </div>
                <div className='Col3' id='Col3'>
                    <h1>7</h1>
                    <h2>Zorganizowanych zbiórek</h2>
                    <h3>Lorem tabarolem</h3>
                </div>
            </div>
        
        </div>
    )
}
