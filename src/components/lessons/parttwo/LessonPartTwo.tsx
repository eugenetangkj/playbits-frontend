"use client"

import { Lesson } from "@/app/types/Types";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TEMP_FLASH_CARDS } from "@/app/constants/TempConstants";
import { FlashcardArray } from "react-quizlet-flashcard";

/**
This component represents part 2 of lesson flow, which is about flash cards.
*/
interface LessonPartTwoProps {
    lesson: Lesson
    setCurrentStage: React.Dispatch<React.SetStateAction<number>>,
}


export default function LessonPartTwo({ lesson, setCurrentStage }: LessonPartTwoProps) {

    //TODO: Fetch all given flash cards for the given lesson
    const fetchCardsIsLoading = false
    const flashCards = TEMP_FLASH_CARDS.map((card, index) => ({
        id: index + 1,
        frontHTML: (
            <div className="flex flex-col items-center justify-center text-center h-full px-4 md:px-8">
            <h4 className="text-h4-heading">{card.front_content}</h4>
            </div>
        ),
        backHTML: (
            <div className="flex flex-col items-center justify-center text-center h-full px-4 md:px-8">
                <h4 className="text-h4-heading">{card.back_content}</h4>
            </div>
        ),
        frontCardStyle: {},
        borderRadius: "1rem",
        className: "w-full",
    }));


    const navigateToPrevious = () => {
        setCurrentStage(prev => {
            const newStage = prev - 1;
            return newStage;
        });
    }


//     const cards = [
//     {
//     id: 1,
//     frontHTML: 
//     <div className='flex flex-col items-center justify-center text-center h-full'>
//         <h4 className='text-h4-heading'>{ flashCards.front_content} </h4>
//     </div>,
    
    
    
//     backHTML: 
//     <div className='flex flex-col items-center justify-center text-center h-full'>
//         <h4 className='text-h4-heading'>{ flashCards.back_content }</h4>
//     </div>,
//     frontCardStyle: { },
//     borderRadius: "1rem",
//     className: "flex flex-col items-center justify-center text-center",
//   },
//     ]




    return (
        fetchCardsIsLoading
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

                <h2 className='text-h2-heading self-center text-center !font-alkalmi'>Flashcard Time!</h2>


                {/* Flash cards */}
                <div className='flex flex-row justify-center items-center' >
                    <FlashcardArray cards={ flashCards } cycle={ true } />
                </div>
                
                
                {/* Navigation */}
                <Button className='green-button w-fit self-center mb-8' onClick={ () => setCurrentStage(2)}>
                    <p className='pt-2 !px-8'>Next</p>
                </Button>

              
             
          
            </div>
        )
    )
}
