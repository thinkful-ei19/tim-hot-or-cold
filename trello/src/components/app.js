import React from 'react';

import Header from './header';
import GuessingSection from './guessing-section';
import UserGuess from './user-guess';
import Info from './info'

export default function App(props){
    return(
        <div>
            <Header />
            <Info />
            <GuessingSection />
            <UserGuess />
    </div>
    )
}