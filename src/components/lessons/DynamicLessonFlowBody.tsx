"use client"

import { Lesson } from "@/app/types/Types"
import { Skeleton } from "../ui/skeleton"
import { useState } from "react"
import LessonPartOne from "./partone/LessonPartOne"
import LessonPartTwo from "./parttwo/LessonPartTwo"
import LessonPartThree from "./partthree/LessonPartThree"
import LessonPartFour from "./partfour/LessonPartFour"

interface DynamicLessonFlowBodyProps {
    lesson: Lesson,
    numberOfQuestions: number
}

export default function DynamicLessonFlowBody({ lesson, numberOfQuestions}: DynamicLessonFlowBodyProps) {
    
    //Constants
    const totalNumberOfStages = 1 + 1 + 1 + numberOfQuestions  // 1 for initial summary, flashcards and 1 for game


    //States
    const [currentStage, setCurrentStage] = useState<number>(0)
    

    if (currentStage == 0) {
        //CASE 1: Render introduction and summary
        return <LessonPartOne lesson={ lesson } setCurrentStage={ setCurrentStage } />
    } else if (currentStage == 1) {
        //CASE 2: Flashcards
        return <LessonPartTwo lesson={ lesson } setCurrentStage={ setCurrentStage } />
    } else if (currentStage == 2) {
        //CASE 3: Flip card game
        return <LessonPartThree lesson={ lesson } setCurrentStage={ setCurrentStage } />
    } else if (currentStage == 3) {
        //CASE 4: Drag and drop
        return <LessonPartFour lesson={ lesson } setCurrentStage={ setCurrentStage } />
    }
    else {
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
