import React from 'react';
import './App.css';
import MediaQuery from 'react-responsive';
import ResponsiveMenu from 'react-responsive-navbar';

// Import sections
import Header from './sections/Header';
import About from './sections/About';
import FAQs from './sections/FAQs';
import Schedule from './sections/Schedule';
import Help from './sections/Help';
import Team from './sections/Team';
import Register from './sections/Register';
import SHeader from './mobile/SHeader';
import SAbout from './mobile/SAbout';
import SNavbar from './mobile/SNavbar';
import SReady from './mobile/SReady';
import STeam from './mobile/STeam';
import SFAQ from './mobile/SFAQ';


class App extends React.Component {
    render() {
        return (
          <div style={{height: '100%'}}>
            <MediaQuery maxDeviceWidth={1224}>
              <div id="mobile__container">
                <SNavbar/>
                <SHeader/>
                <SAbout/>
                <SReady/>
                <STeam/>
                <SFAQ />
                <div className="footer">
                  <p>Made with love by the CincyHacks team.</p>
                </div>
              </div>
            </MediaQuery>

            <MediaQuery minDeviceWidth={1224}>
              <div id="website-container">
                <Header />
                <About />
                <FAQs />
                <Team />
                <Register />
              </div>

            </MediaQuery>
          </div>
        );
    }
}

export default App;
