import React from 'react';
//import ReactDOM from 'react-dom';

const NavButtons = () => (
    <>
    <div>
    <button className='NavButton1'>Start</button>
    <Link to="/home">About</Link>
    </div>
    <button className='NavButton2'>"O co chodzi?"</button>
    <button className='NavButton3'>O nas</button>
    <button className='NavButton4'>Fundacja i organizacje</button>
    <button className='NavButton5'>Kontakt</button>
    </>
)

export default NavButtons;