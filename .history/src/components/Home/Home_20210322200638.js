import React from 'react';
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import LittleDo from "../LittleDo/LittleDo";
import WhoWeHelp from '../WhoWeHelp/WhoWeHelp';
import ContactUs from '../ContactUS/ContactUs.js';
import AboutUs from '../AboutUs/AboutUs.js';
import Footer from '../Footer/Footer.js';
import Nav from '../Nav/Nav.js';

// function App() {
//   return (
//     <div style={{ backgroundImage: `url(${background})` }}>
//       Hello World
//     </div>
//   );
// }

// export default App;
export default function Home() {
    return (
        <>

            <Nav/>
            <ThreeColumns/>
            <LittleDo/>
            <WhoWeHelp/>
            <AboutUs/>
            <ContactUs/>
            <Footer/>
        </>
    );
}