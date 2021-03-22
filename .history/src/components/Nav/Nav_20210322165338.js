import React from 'react';
//import { Link } from 'react-scroll'; 
//import { NavLink } from 'react-router-dom'; 
// import * as ROUTES from '../Mapofproject/Map.js';
//import Buttons from '../Nav/HeaderButtons';
import './_Nav.scss';


export default function Nav() {
    return (
        <div>
           <div style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + './src/assets/Home-Hero_image.jpg'})`,
        backgroundRepeat: 'no-repeat',
        width:'250px' 
        }}></div> 
        </div>
    )
}



