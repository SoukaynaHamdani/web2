import { useState } from 'react'
import { cardSet } from './cards'
import Flashcard from './components/Flashcard'
import './App.css'

function App() {
  const { title, description, cards } = cardSet

  // Track which card is currently being shown.
  const [currentIndex, setCurrentIndex] = useState(0)

  // Pick a new random card. Loops until it finds an index different
  // from the current one so the same card doesn't appear twice in a row.
  const showRandomCard = () => {
    if (cards.length <= 1) return
    let nextIndex = currentIndex
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * cards.length)
    }
    setCurrentIndex(nextIndex)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <p className="card-count">Number of cards: {cards.length}</p>
      </header>

      <Flashcard card={cards[currentIndex]} />

      <div className="controls">
        <button className="nav-button" onClick={showRandomCard}>
          Next →
        </button>
      </div>
    </div>
  )
}

export default App
