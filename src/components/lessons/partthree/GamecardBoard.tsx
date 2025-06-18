"use client"

import { useState } from "react";
import { Gamecard } from "@/app/types/Types";
import Image from "next/image";
import { toast } from "sonner"
import { RotateCcw } from "lucide-react";


interface GamecardBoardProps {
    cards: Gamecard[]; // assume already shuffled and duplicated pairs
    setHasCompleted: React.Dispatch<React.SetStateAction<boolean>>,
}

export  function GamecardBoard({ cards, setHasCompleted }: GamecardBoardProps) {
    // Track which cards are flipped currently (by id)
    const [flipped, setFlipped] = useState<string[]>([]);
    // Track which cards are matched (by id)
    const [matched, setMatched] = useState<Set<string>>(new Set());

    // Handle click on a card
    const handleCardClick = (id: string) => {
    // Ignore if already matched or already flipped
    if (matched.has(id) || flipped.includes(id)) return;

    if (flipped.length === 1) {
        // Flip second card
        const firstCardId = flipped[0];
        const secondCardId = id;

        // Find cards
        const firstCard = cards.find((c) => c.id === firstCardId);
        const secondCard = cards.find((c) => c.id === secondCardId);

        if (!firstCard || !secondCard) return;

        setFlipped([firstCardId, secondCardId]);

        if (firstCard.pair_number === secondCard.pair_number) {
        // Cards match - lock them after a short delay
        toast("Well Done!", {
          description: "You have found a match. 🤩",
          position: 'top-center',
          descriptionClassName: 'text-paragraph',
        })
        setTimeout(() => {
            if (matched.size == cards.length - 2) {
                setHasCompleted(prev => { return ! prev });
            }
            setMatched((prev) => new Set(prev).add(firstCardId).add(secondCardId));
            setFlipped([]);



        }, 1000); // 1 second delay to show matched cards
        } else {
        // Not matched - flip back after delay
        setTimeout(() => {
            setFlipped([]);
        }, 1000); // 1 second delay to show cards before flipping back
        }
    } else {
        // Flip first card
        setFlipped([id]);
    }
    };

    //Handle reset
    const handleResetCards = () => {
        setFlipped([])
        setMatched(new Set())
    }

    return (
    <div className='flex flex-col items-center space-y-4'>

        {/* Retry */}
        <button onClick={ handleResetCards } className='self-end cursor-pointer'>
            <RotateCcw className='mr-8 d:mr-16' />
        </button>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-16">
            {cards.map((card) => {
            const isFlipped = flipped.includes(card.id) || matched.has(card.id);

            return (
                <div
                    key={card.id}
                    onClick={() => handleCardClick(card.id)}
                    className={`cursor-pointer border rounded-xl p-4 text-center select-none flex flex-col items-center justify-center w-[200px] sm:w-[220px] lg::w-[300px] h-[250px] ${
                        isFlipped ?
                        "bg-white border-4 border-playbits-orange-900"
                        : "bg-playbits-orange-900"
                    }`}
                    >
                    { isFlipped
                    ? <p className='text-h6-heading'>{ card.content }</p>
                    : <Image src='/assets/games/green-shape.svg' className='px-8 w-[160px]' alt='Green Shape' width={ 79 } height={ 90 } /> 
                    }
                </div>
                
            )
            }
        )}
        </div>
    </div>
    )
}
