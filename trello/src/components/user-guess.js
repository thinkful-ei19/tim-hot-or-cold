import React from 'react';
import Feedback from './feedback'
import GuessForm from './guessform'
import GuessCount from './guesscount'
import GuessList from './guesslist'

export default function UserGuess(){
    return(
        <section>
            <Feedback />
            <GuessForm />
            <GuessCount count={10} />
        <GuessList list={[1,2,3]} />
        </section>
    )

}