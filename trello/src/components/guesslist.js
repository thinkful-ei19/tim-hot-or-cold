import React from 'react';

export default function GuessList(props){
    return(
        <ul id="guessList" class="guessBox clearfix"><li>{props.list}</li>
            <li>{props.list}</li></ul>
    )
}