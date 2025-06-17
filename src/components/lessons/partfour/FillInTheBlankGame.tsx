"use client"
import { useState } from "react"
import { Question } from "@/app/types/Types"
import { Progress } from "@/components/ui/progress"
import { FillInTheBlankQuestion } from "./FillInTheBlankQuestion"


interface FillInTheBlankGameProps {
    questions: Question[]
}


export default function FillInTheBlankGame({ questions }: FillInTheBlankGameProps) {
    
    //States
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)




  




  return (
    <div className='flex flex-col items-center space-y-16'>
        {/* Progress indicator */}
        <Progress value={ ((currentQuestionIndex + 1) / questions.length) * 100  } className='w-[200px] sm:w-[400px] md:w-[600px]' />

        {/* Current Question */}
        <FillInTheBlankQuestion question={ questions[currentQuestionIndex] } setCurrentQuestionIndex={ setCurrentQuestionIndex } />



      
    </div>

  )
}