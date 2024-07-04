import React from "react"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { WORDS } from "../../data"
import { sample } from "../../utils"
import GuessInput from "../GuessInput"
import GuessResults from "../GuessResults"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running")
  const [guesses, setGuesses] = React.useState([])

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = [...guesses, tentativeGuess]
    setGuesses(nextGuess)

    if (nextGuess === answer) {
      setGameStatus("won")
    } else if (nextGuess.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
  }

  return (
    <>
      {gameStatus}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
    </>
  )
}

export default Game
