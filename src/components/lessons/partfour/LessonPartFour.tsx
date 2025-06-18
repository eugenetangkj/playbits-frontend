"use client"

import { Lesson, Question } from "@/app/types/Types";
import { MoveLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { shuffleArray } from "@/app/utils/Helpers";
import FillInTheBlankGame from "./FillInTheBlankGame";
import useSWR from "swr";
import { GET_ALL_QUESTIONS_BY_LESSON_ID_SWR_HOOK } from "@/app/constants/SwrHooks";
import { fetchQuestionsByLessonId } from "@/data-fetchers/OtherFetchers";

/**
This component represents part 4 of lesson flow, which is about drag and drop questions
*/
interface LessonPartFourProps {
    lesson: Lesson
    setCurrentStage: React.Dispatch<React.SetStateAction<number>>,
}


export default function LessonPartFour({ lesson, setCurrentStage }: LessonPartFourProps) {

    //Fetch associated questions
    const { data, error, isLoading } = useSWR<Question[]>(GET_ALL_QUESTIONS_BY_LESSON_ID_SWR_HOOK, () => fetchQuestionsByLessonId(lesson.id))




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
            <Skeleton className='h-[50px] w-[200px] self-center' />
            <Skeleton className='h-[50px] w-[300px] self-center' />
          </div>
        : error || data === undefined || data.length == 0
        ? <div className="custom-padding">
                <p className='text-paragraph mt-32'>Something went wrong. We could not fetch the questions. 😥</p>
          </div>
        : (
            <div className='flex flex-col justify-center space-y-8 custom-padding'>
                <button className='flex flex-row items-center space-x-2 hover:text-gray-500 duration-200 cursor-pointer' onClick={ navigateToPrevious }>
                    <MoveLeft className='' />
                    <p className='text-paragraph'>Previous</p>
                </button>


                {/* Title */}
                <h2 className='text-h2-heading self-center text-center !font-alkalmi'>Fill in the Blank</h2>


                {/* Game */}
                <div className='self-center w-3/4'>
                    <FillInTheBlankGame questions={ shuffleArray(data) } setCurrentStage={ setCurrentStage } />
                </div>

            </div>
        )
    )
}
