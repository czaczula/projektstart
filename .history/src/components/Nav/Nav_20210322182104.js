import React from 'react';
import 
//import { Link } from 'react-scroll'; 
//import { NavLink } from 'react-router-dom'; 
// import * as ROUTES from '../Mapofproject/Map.js';
//import Buttons from '../Nav/HeaderButtons';
import './_Nav.scss';


// export default function Nav() {
//     return (
//         <div>
const Layout =({children}) =>{
    return(
        <>
        <div>
            <HeaderButtons/>
            <AboutUs/>
            
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;
//         </div>
//     )
// }



