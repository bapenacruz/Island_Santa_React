import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Gallery from './GalleryComponent';
import Story from './StoryComponent';
import RudolfCam from './RudolfCamComponent';
import NaughtyorNice from './NaughtyorNiceComponent';
import Letter from './LetterComponent';
import Social from './SocialComponent';
import Reservations from './ReservationComponent';
import Footer from './FooterComponent';

class Main extends Component {
    render() {
         return (
            <div>
                <Header />
                <Home />
                <Gallery />
                <Story />
                <RudolfCam />
                <NaughtyorNice />
                <Letter />
                <Social />
                <Reservations />
                <Footer />
            </div>
        );
    }
}

export default Main;
