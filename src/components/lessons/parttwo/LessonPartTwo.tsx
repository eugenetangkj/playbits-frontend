"use client"

import { Flashcard, Lesson } from "@/app/types/Types";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TEMP_FLASH_CARDS } from "@/app/constants/TempConstants";
import { FlashcardArray } from "react-quizlet-flashcard";
import useSWR from 'swr'
import { GET_ALL_FLASHCARDS_BY_LESSON_ID_SWR_HOOK } from "@/app/constants/SwrHooks";
import { fetchFlashCardsByLessonId } from "@/data-fetchers/OtherFetchers";


/**
This component represents part 2 of lesson flow, which is about flash cards.
*/
interface LessonPartTwoProps {
    lesson: Lesson
    setCurrentStage: React.Dispatch<React.SetStateAction<number>>,
}


export default function LessonPartTwo({ lesson, setCurrentStage }: LessonPartTwoProps) {

    //Fetch the flash cards associated with the current lesson
    const { data, error, isLoading } = useSWR<Flashcard[]>(GET_ALL_FLASHCARDS_BY_LESSON_ID_SWR_HOOK, () => fetchFlashCardsByLessonId(lesson.id))

    const navigateToPrevious = () => {
        setCurrentStage(prev => {
            const newStage = prev - 1;
            return newStage;
        });
    }


    return (
        isLoading
        ? <div className='flex flex-col space-y-8 px-6 md:px-12 mt-16 mb-8'> 
            <Skeleton className='h-[30px] w-[240px]' />
            <Skeleton className='h-[50px] w-[200px] self-center' />
            <Skeleton className='h-[300px] w-[400px] self-center' />
          </div>
        : error || data == undefined || data.length == 0
        ? <div className="custom-padding">
                <p className='text-paragraph mt-32'>Something went wrong. We could not fetch the flash cards. 😥</p>
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
                    <FlashcardArray cards={ 
                        data.map((card, index) => ({
                        id: index + 1,
                        frontHTML: (
                            <div className="flex flex-col items-center justify-center text-center h-full px-4 md:px-8">
                            <h4 className="text-h5-heading">{card.front_content}</h4>
                            </div>
                        ),
                        backHTML: (
                            <div className="flex flex-col items-center justify-center text-center h-full px-4 md:px-8">
                                <h4 className="text-h5-heading">{card.back_content}</h4>
                            </div>
                        ),
                        frontCardStyle: {},
                        borderRadius: "1rem",
                        className: "w-full",
                    }))
                    } cycle={ true } />
                </div>
                
                
                {/* Navigation */}
                <Button className='green-button w-fit self-center mb-8' onClick={ () => setCurrentStage(2)}>
                    <p className='pt-2 !px-8'>Next</p>
                </Button>

              
             
          
            </div>
        )
    )
}
