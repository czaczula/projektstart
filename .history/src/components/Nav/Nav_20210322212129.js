import React from 'react';
import HeaderButtons from '../Nav/HeaderButtons';
import NavButtons from '../Nav/NavButtons';
import { Link } from 'react-scroll'; 
import { NavLink } from 'react-router-dom'; 
import * as ROUTES from '../Mapofproject/Map.js';
//import Buttons from '../Nav/HeaderButtons';
import './_Nav.scss';


// export default function Nav() {
//     return (
//         <div>
const Layout =() =>{
    return(
        <>
        
        <div className='Head' id='Head'>
        <div className='LeftHeadImg'/>
        <div className='HeadContainer'>
            <div className>
            <div className='UpMenuList1'/>
            <div className='DownMenuList2'/>
            </div>
        </div>
        
            
    
        </>
       
    )
}

export default Layout;
//         </div>
//     )
// }



