"use client"

import { Lesson } from "@/app/types/Types"
import { Skeleton } from "../ui/skeleton"
import { useState } from "react"
import LessonPartOne from "./partone/LessonPartOne"

interface DynamicLessonFlowBodyProps {
    lesson: Lesson,
    numberOfFlashcards: number,
    numberOfQuestions: number
}

export default function DynamicLessonFlowBody({ lesson, numberOfFlashcards, numberOfQuestions}: DynamicLessonFlowBodyProps) {
    
    //Constants
    const totalNumberOfStages = 1 + numberOfFlashcards + 1 + numberOfQuestions  // 1 for initial summary and 1 for game


    //States
    const [currentStage, setCurrentStage] = useState<number>(0)
    

    if (currentStage == 0) {
        //CASE 1: Render introduction and summary
        return <LessonPartOne lesson={ lesson } setCurrentStage={ setCurrentStage } />
    } else {
        //TODO: Other cases
        return <div>Hello</div>
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //TODO: Fetch actual lesson
     
    // const { data: userProfile, error: useUserProfileError, isLoading: useUserProfileIsLoading } = useUserProfile();

    // //Fetch the given poll
    // const { data: poll, error: getPollError, isLoading: getPollIsLoading } = useSWR(`${POLLS_GET_BY_OID_SWR_HOOK}/${id}`, () => pollsGetByOid(id));

    const useUserProfileIsLoading = false
    const getPollIsLoading = false
    

    return (
        useUserProfileIsLoading || getPollIsLoading
        ? <div className='flex flex-col space-y-8 px-6 md:px-12 mt-32 mb-8'> 
            <Skeleton className='h-[30px] w-[240px]' />
            <Skeleton className='h-[50px] w-[200px] self-center' />
            <Skeleton className='h-[300px] w-[300px] self-center' />
          </div>
        : true //poll?.id.length === 0 || poll === undefined || useUserProfileError || getPollError
        ? <div className="custom-padding">
                <p className='text-paragraph mt-32'>Something went wrong. We could not fetch the lesson.</p>
          </div>
        : <div className="px-6 md:px-12 font-afacad mt-32 mb-8">
            <div>Hello</div>
            {/* {
                userProfile?.role === UserRoleEnum.Admin
                ? <ViewPollAdmin currentPoll={ poll } />
                : <ViewPollCitizen currentPoll={ poll } />
            } */}
          </div>
    );











    //TODO: Fetch actual lesson
    // return (
    //     <div className='relative flex flex-col justify-end items-center space-y-24 overflow-x-hidden pt-28 md:pt-36 overflow-y-hidden min-h-screen'>
          
    //     </div>
    // )
}
