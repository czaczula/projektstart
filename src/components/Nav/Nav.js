import React from 'react';
import { Link } from 'react-scroll'; 
import { NavLink } from 'react-router-dom'; 
import * as ROUTES from '../Mapofproject/Map.js';
import Buttons from '../Nav/HeaderButtons';
import './_Nav.scss';


// export default function Nav() {
//     return (
//         <div>
const Layout =() =>{
    return(       
            <div className='Head' id='Head'>
                <div className='LeftHeadImg'></div>
                <div className='HeadContainer'>
                    <div className='MenuList'>
                        <ul className='UpMenuList1'>
                            <li className='UpButton'><NavLink className='UpButtonLink' to={ROUTES.LOGIN}>Zaloguj</NavLink></li>
                            <li className='UpButton'><NavLink className='UpButtonLink' to={ROUTES.REGISTER}>Załóż konto</NavLink></li>
                        </ul>
                        <div className='DownMenuList2'>
                            <Link className='DownMenuListLink'
                                to='Head'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}>
                                Start
                            </Link>
                            <Link className='DownMenuListLink'
                                to='ThreeColumns'
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={1000}>
                                O co chodzi?
                            </Link>
                            <Link className='DownMenuListLink'
                                activeClass='active'
                                to='AboutUs'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}>
                                O nas
                            </Link>
                            <Link className='DownMenuListLink'
                                activeClass='active'
                                to='WhoWeHelp'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}>
                                Komu pomagamy
                            </Link>
                            <Link className='DownMenuListLink'
                                activeClass='active'
                                to='ContactUs'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}>
                                Kontakt
                            </Link>
                        </div>
                    
                    </div>
                </div>
                {/* <div className='InfoBanner'>
                            <div>
                                <p>Zacznij pomagać</p>
                                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                            </div>
                <Buttons/>
                </div> */}
            </div>
    )
}

export default Layout;
//         </div>
//     )
// }



