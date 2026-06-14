import { useState, useEffect } from 'react'

// A single flashcard. Receives one card object via props and manages
// its own "flipped" state. Clicking the card toggles between the
// question (front) and the answer (back).
function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Whenever a new card is shown, reset back to the question side.
  useEffect(() => {
    setIsFlipped(false)
  }, [card])

  const handleClick = () => {
    setIsFlipped((flipped) => !flipped)
  }

  // Color-code the card based on its difficulty category (stretch feature).
  const categoryClass = card.category
    ? `category-${card.category.toLowerCase()}`
    : ''

  return (
    <div
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="flashcard-inner">
        {/* Front: the question */}
        <div className={`flashcard-face flashcard-front ${categoryClass}`}>
          {card.category && (
            <span className="category-tag">{card.category}</span>
          )}
          <p className="card-text">{card.question}</p>
        </div>

        {/* Back: the answer (plus an image if the card has one) */}
        <div className={`flashcard-face flashcard-back ${categoryClass}`}>
          {card.category && (
            <span className="category-tag">{card.category}</span>
          )}
          <p className="card-text">{card.answer}</p>
          {card.image && (
            <img className="card-image" src={card.image} alt={card.answer} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Flashcard
