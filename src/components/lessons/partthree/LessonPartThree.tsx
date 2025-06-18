"use client"

import { Gamecard, Lesson } from "@/app/types/Types";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { GamecardBoard } from "./GamecardBoard";
import { useState } from "react";
import useSWR from "swr";
import { GET_ALL_GAMECARDS_BY_LESSON_ID_SWR_HOOK } from "@/app/constants/SwrHooks";
import { fetchGameCardsByLessonId } from "@/data-fetchers/OtherFetchers";
import { shuffleArray } from "@/app/utils/Helpers";

/**
This component represents part 3 of lesson flow, which is about flip cards.
*/
interface LessonPartThreeProps {
    lesson: Lesson
    setCurrentStage: React.Dispatch<React.SetStateAction<number>>,
}


export default function LessonPartThree({ lesson, setCurrentStage }: LessonPartThreeProps) {

    //Fetch the game cards associated with the current lesson
    const { data, error, isLoading } = useSWR<Gamecard[]>(GET_ALL_GAMECARDS_BY_LESSON_ID_SWR_HOOK, () => fetchGameCardsByLessonId(lesson.id))
    const [hasCompleted, setHasCompleted] = useState<boolean>(false)

    const navigateToPrevious = () => {
        setCurrentStage(prev => {
            const newStage = prev - 1;
            return newStage;
        });
    }

   
    return (
        isLoading
        ? <div className='flex flex-col space-y-8 px-6 md:px-12 mt-32 mb-8'> 
            <Skeleton className='h-[30px] w-[240px]' />
            <div className='flex flex-row space-x-8 self-center'>
                <Skeleton className='h-[300px] w-[200px]' />
                <Skeleton className='h-[300px] w-[200px]' />
            </div>
          </div>
        : error || data === undefined || data.length === 0
        ? <div className="custom-padding">
                <p className='text-paragraph mt-32'>Something went wrong. We could not fetch the game cards. 😥</p>
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
                <GamecardBoard cards={ shuffleArray(data) } setHasCompleted={ setHasCompleted } />

      
                {/* Navigation */}
                <Button className='green-button w-fit self-center mb-8' onClick={ () => setCurrentStage(3)} disabled={ ! hasCompleted }>
                    <p className='pt-2 !px-8'>Next</p>
                </Button>

            </div>
        )
    )
}
