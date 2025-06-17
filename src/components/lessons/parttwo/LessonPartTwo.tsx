"use client"

import { Lesson } from "@/app/types/Types";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";


/**
This component represents part 2 of lesson flow, which is about flash cards.
*/
interface LessonPartTwoProps {
    lesson: Lesson
    setCurrentStage: React.Dispatch<React.SetStateAction<number>>,
}


export default function LessonPartTwo({ lesson, setCurrentStage }: LessonPartTwoProps) {


    const navigateToPrevious = () => {
        setCurrentStage(prev => {
            const newStage = prev - 1;
            return newStage;
        });
    }


    return (
        <div className='flex flex-col justify-center space-y-8 custom-padding'>
            <button className='flex flex-row items-center space-x-2 hover:text-gray-500 duration-200 cursor-pointer' onClick={ navigateToPrevious }>
                <MoveLeft className='' />
                <p className='text-paragraph'>Previous</p>
            </button>

            <h2 className='text-h2-heading self-center text-center !font-alkalmi'>{ lesson.title }</h2>

            <div className='flex flex-col space-y-4 self-center text-center'>
                <h6 className='text-h6-heading !font-alkalmi'>HELLO</h6>
                <p className='w-full sm:w-3/4 2xl:w-1/2 self-center text-paragraph'>{ lesson.summary }</p>
            </div>


            <Button className='green-button w-fit self-center' onClick={ () => setCurrentStage(2)}>
                <p className='pt-2 !px-8'>Let&apos;s go!</p>
            </Button>
          
        </div>
    )
}
