"use client"

import { TEMP_LESSONS } from "@/app/constants/TempConstants"
import { Skeleton } from "../ui/skeleton"
import DynamicLessonFlowBody from "./DynamicLessonFlowBody"

interface LessonPartOneProps {
    lessonId: string
}

export default function ViewLessonFlowBody({ lessonId }: LessonPartOneProps) {
    //TODO: Fetch actual lesson and determine number of flashcards and questions
     
    // const { data: userProfile, error: useUserProfileError, isLoading: useUserProfileIsLoading } = useUserProfile();

    // //Fetch the given poll
    // const { data: poll, error: getPollError, isLoading: getPollIsLoading } = useSWR(`${POLLS_GET_BY_OID_SWR_HOOK}/${id}`, () => pollsGetByOid(id));

    const useUserProfileIsLoading = false
    const getPollIsLoading = false


    //Hard-coded constants
    const numberOfFlashcards = 2
    const numberOfQuestions = 5
    const lesson = TEMP_LESSONS[0]
    

    return (
        useUserProfileIsLoading || getPollIsLoading
        ? <div className='flex flex-col space-y-8 px-6 md:px-12 mt-32 mb-8'> 
            <Skeleton className='h-[30px] w-[240px]' />
            <Skeleton className='h-[50px] w-[200px] self-center' />
            <Skeleton className='h-[300px] w-[300px] self-center' />
          </div>
        : false //poll?.id.length === 0 || poll === undefined || useUserProfileError || getPollError
        ? <div className="custom-padding">
                <p className='text-paragraph mt-32'>Something went wrong. We could not fetch the lesson.</p>
          </div>
        : <div className='pt-28 md:pt-36'>
            <DynamicLessonFlowBody lesson={ lesson } numberOfFlashcards={ numberOfFlashcards } numberOfQuestions={ numberOfQuestions } />
          </div>
    );











    //TODO: Fetch actual lesson
    // return (
    //     <div className='relative flex flex-col justify-end items-center space-y-24 overflow-x-hidden pt-28 md:pt-36 overflow-y-hidden min-h-screen'>
          
    //     </div>
    // )
}
