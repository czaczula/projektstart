import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../components/Mapofproject/Map';
import './_LittleDoButton.scss';

const Button = () => {
    return(
    <>
    <button className='LittleDoButton'><NavLink to={ROUTES.LOGIN}>oddaj <br/>rzeczy</NavLink></button>
    </>
    )
}

export default Button;