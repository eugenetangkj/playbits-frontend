"use client"

import { Lesson } from "@/app/types/Types";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TEMP_GAME_CARDS } from "@/app/constants/TempConstants";
import { GamecardBoard } from "./GamecardBoard";
import { useState } from "react";

/**
This component represents part 3 of lesson flow, which is about flip cards.
*/
interface LessonPartThreeProps {
    lesson: Lesson
    setCurrentStage: React.Dispatch<React.SetStateAction<number>>,
}


export default function LessonPartThree({ lesson, setCurrentStage }: LessonPartThreeProps) {
    const [hasCompleted, setHasCompleted] = useState<boolean>(false)

    const fetchGamecardsIsLoading = false

    const navigateToPrevious = () => {
        setCurrentStage(prev => {
            const newStage = prev - 1;
            return newStage;
        });
    }

    //TODO: Must randomise the cards
    const allGameCards = TEMP_GAME_CARDS

    return (
        fetchGamecardsIsLoading
        ? <div className='flex flex-col space-y-8 px-6 md:px-12 mt-32 mb-8'> 
            <Skeleton className='h-[30px] w-[240px]' />
            <Skeleton className='h-[50px] w-[200px] self-center' />
            <Skeleton className='h-[300px] w-[300px] self-center' />
          </div>
        : false //poll?.id.length === 0 || poll === undefined || useUserProfileError || getPollError
        ? <div className="custom-padding">
                <p className='text-paragraph mt-32'>Something went wrong. We could not fetch the flash cards.</p>
          </div>
        : (
            <div className='flex flex-col justify-center space-y-8 custom-padding'>
                <button className='flex flex-row items-center space-x-2 hover:text-gray-500 duration-200 cursor-pointer' onClick={ navigateToPrevious }>
                    <MoveLeft className='' />
                    <p className='text-paragraph'>Previous</p>
                </button>


                {/* Title */}
                <h2 className='text-h2-heading self-center text-center !font-alkalmi'>Find the Right Pair</h2>


                {/* Game board */}
                <GamecardBoard cards={ allGameCards } setHasCompleted={ setHasCompleted } />

      
                {/* Navigation */}
                <Button className='green-button w-fit self-center mb-8' onClick={ () => setCurrentStage(3)} disabled={ ! hasCompleted }>
                    <p className='pt-2 !px-8'>Next</p>
                </Button>

            </div>
        )
    )
}
