import React from 'react';

export default function GuessForm() {
return (
<form>
         <input type="text" name="userGuess" placeholder="Enter your Guess" required></input>
         <input type="submit" id="guessButton" class="button" name="submit" value="Guess"></input>
        </form>
)
}