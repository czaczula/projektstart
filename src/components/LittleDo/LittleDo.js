import React from 'react';
import './_LittleDo.scss';
import Button from './LittleDoButton.js'

const LittleDo = () => (
    <>
    <h1>Wystarczą 4 proste kroki</h1>
    <div className='LittleDoDecor'/>
    <div className='LittleDoContainer'>
        <div className='LittleDoRam1'>
            <p></p>
            <h2>Wybierz rzeczy</h2>
            <div className='LittleDoThing'/>
            <span>ubrania, zabawki, sprzęt i inne</span>
        </div>
        <div className='LittleDoRam2'>
            <p></p>
            <h2>Spakuj je</h2>
            <div className='LittleDoThing'/>
            <span>skorzystaj z worków na śmieci</span>
        </div>
        <div className='LittleDoRam3'>
            <p></p>
            <h2>Zdecyduj komu chcesz pomóc</h2>
            <div className='LittleDoThing'/>
            <span>wybierz zaufane miejsce</span>
        </div>
        <div className='LittleDoRam4'>
            <p></p>
            <h2>Zamów kuriera</h2>
            <div className='LittleDoThing'/>
            <span>kurier przyjedzie w dogodnym terminie</span>
        </div>

    </div>
    
    <Button/>
    </>
)

export default LittleDo;