import React from "react"

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("")

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log({ tentativeGuess })
    handleSubmitGuess(tentativeGuess)
    setTentativeGuess("")
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={(event) => setTentativeGuess(event.target.value.toUpperCase())}
        />
      </form>
    </>
  )
}

export default GuessInput
