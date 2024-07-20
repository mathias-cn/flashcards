import { useState } from 'react'
import { Flashcard } from './components/flashcard'

export function App() {
  const [currentFlash, setCurrentFlash] = useState(0)
  const flashcards = [
    { id: 1,question: "What language is React on?", answer: "Javascript" },
    { id: 2,question: "What are the building blocks of React apps?", answer: "Components" },
    { id: 3,question: "What's the name of the syntax we use to describe a UI in React?", answer: "JSX" },
    { id: 4,question: "How to pass data from parent to child components?", answer: "Props" },
    { id: 5,question: "How to give components memory?", answer: "useState hook" },
    { id: 6,question: "What do we call an input element that is completely synchronised with state?", answer: "Controlled component" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {flashcards.map(f => (
        currentFlash === f.id ? (
          <Flashcard key={f.id} flashcardObj={f} clicked={true} />
        ) : (
          <Flashcard key={f.id} flashcardObj={f} clicked={false} onClickFunction={() => setCurrentFlash(f.id)}  />
        )
      ))}
    </div>
  )
}
