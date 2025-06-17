"use client"

import { TEMP_LESSONS } from "@/app/constants/TempConstants"
import { Skeleton } from "../ui/skeleton"
import DynamicLessonFlowBody from "./DynamicLessonFlowBody"
import useSWR from "swr"
import { LESSON_GET_BY_ID_SWR_HOOK } from "@/app/constants/SwrHooks"
import { lessonGetById } from "@/data-fetchers/LessonFetchers"

interface LessonPartOneProps {
    lessonId: string
}

export default function ViewLessonFlowBody({ lessonId }: LessonPartOneProps) {
    //Fetch the lesson
    const { data: lesson, error: getLessonError, isLoading: getLessonIsLoading } = useSWR(`${LESSON_GET_BY_ID_SWR_HOOK}/${lessonId}`,  () => lessonGetById(lessonId))
     
    return (
        getLessonIsLoading
        ? <div className='flex flex-col space-y-8 px-6 md:px-12 mt-32 mb-8'> 
            <Skeleton className='h-[30px] w-[240px]' />
            <Skeleton className='h-[50px] w-[200px] self-center' />
            <Skeleton className='h-[300px] w-[300px] self-center' />
          </div>
        : getLessonError || lesson === undefined || lesson.id == ''
        ? <div className="custom-padding">
                <p className='text-paragraph mt-32'>Something went wrong. We could not fetch the lesson. 😥</p>
          </div>
        : <div className='pt-28 md:pt-36'>
            <DynamicLessonFlowBody lesson={ lesson } />
          </div>
    );











    //TODO: Fetch actual lesson
    // return (
    //     <div className='relative flex flex-col justify-end items-center space-y-24 overflow-x-hidden pt-28 md:pt-36 overflow-y-hidden min-h-screen'>
          
    //     </div>
    // )
}
