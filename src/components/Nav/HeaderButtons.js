import React from 'react';
import '../Nav/_HeaderButtons.scss';
import * as ROUTES from '../Mapofproject/Map';
import { Link } from 'react-router-dom';

const Buttons = () => (
    <>
    <button className='HeaderButton1'><Link to ={ROUTES.LOGIN}>Oddaj<br/>rzeczy</Link></button>
    <button className='HeaderButton2'><Link to ={ROUTES.LOGIN}>Zorganizuj <br/>zbiórke</Link></button>
    </>
)

export default Buttons;