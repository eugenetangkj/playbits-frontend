"use client"

import { Lesson } from "@/app/types/Types";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";


/**
This component represents part 1 of a lesson flow, which is showing lesson title and summary.
*/
interface LessonPartOneProps {
    lesson: Lesson
    setCurrentStage: React.Dispatch<React.SetStateAction<number>>,
}


export default function LessonPartOne({ lesson, setCurrentStage }: LessonPartOneProps) {
    return (
        <div className='flex flex-col justify-center space-y-16 md:space-y-20 xl:space-y-24 custom-padding h-full'>
            <Link href='/lessons' className='flex flex-row items-center space-x-2 hover:text-gray-500 duration-200'>
                <MoveLeft className='' />
                <p className='text-paragraph'>Back to All Lessons</p>
            </Link>

            <h2 className='text-h2-heading self-center text-center !font-alkalmi !leading-snug'>{ lesson.title }</h2>

            <div className='flex flex-col space-y-4 self-center text-center'>
                <h6 className='text-h6-heading !font-alkalmi'>Summary</h6>
                <p className='w-full sm:w-3/4 2xl:w-1/2 self-center text-paragraph'>{ lesson.summary }</p>
            </div>


            <Button className='green-button w-fit self-center mb-8' onClick={ () => setCurrentStage(1)}>
                <p className='pt-2 !px-8'>Let&apos;s go!</p>
            </Button>
          
        </div>
    )
}
