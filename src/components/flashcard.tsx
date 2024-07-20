interface FlashcardProps {
    clicked: boolean
    flashcardObj: {
        id: number
        question: string,
        answer: string
    }
    onClick?: () => void
}

export function Flashcard({ clicked, flashcardObj, onClick }: FlashcardProps) {

    return clicked ? (
        <div className="bg-red-500 border-2 border-red-700 text-white rounded-md p-4 h-60 flex items-center justify-center text-center">
            <p>{flashcardObj.answer}</p>
        </div>
    ) : (
        <div onClick={onClick} className="bg-gray-200 border-2 border-gray-300 rounded-md p-4 h-60 flex items-center justify-center text-center cursor-pointer">
            <p>{flashcardObj.question}</p>
        </div>
    )
}