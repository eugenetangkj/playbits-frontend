"use client"

import { DndContext, pointerWithin } from '@dnd-kit/core';
import { useState } from 'react';
import { DropZone } from './Dropzone';
import { DraggableOption } from './DraggableOption';
import { toast } from 'sonner';
import { Question } from '@/app/types/Types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface FillInTheBlankQuestionProps {
    question: Question
    currentQuestionIndex: number,
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>,
    totalNumberOfQuestions: number
}


const splitQuestionText = (text: string): [string, string] => {
  const match = text.match(/_+/); // Find any sequence of underscores

  if (!match || match[0].length < 5) {
    // If no underscores or less than 5 in a row, return full string in first part
    return [text, ""];
  }

  const parts = text.split(/_+/);
  return [parts[0] || "", parts[1] || ""];
};





export const FillInTheBlankQuestion = ({
  question,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  totalNumberOfQuestions
}: FillInTheBlankQuestionProps) => {

    const router = useRouter();

  const [droppedValue, setDroppedValue] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);


  const parts = splitQuestionText(question.question);

  const handleDragEnd = (event: any) => {
    const { over, active } = event;
    if (over?.id === "question-blank") {
      setDroppedValue(active.id);
    }
  };

  console.log(parts)

  return (
    <DndContext collisionDetection={pointerWithin} onDragEnd={handleDragEnd}>
      {/* Sentence with dynamic blank */}
      <div className="text-h2-heading text-center">
        {parts[0]}
        <DropZone id="question-blank" value={droppedValue} />
        {parts[1]}
      </div>

      {/* Options */}
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        {question.options.map((opt) => (
          <DraggableOption key={opt} id={opt} label={opt} />
        ))}
      </div>

      {/* Check Button */}
      <button
        onClick={() => {
            if (droppedValue == question.answer) {
                toast("✅ Correct!", {
                description: "Well done!",
                descriptionClassName: "text-paragraph",
                position: 'top-center',
                });

                if (currentQuestionIndex == totalNumberOfQuestions - 1) {
                setShowDialog(true);
                } else {
                setTimeout(() => setCurrentQuestionIndex((prev) => prev + 1), 1000);
                setDroppedValue(null);
                }
            } else {
                toast("❌ Oops!", {
                description: "Try again.",
                descriptionClassName: "text-paragraph",
                position: 'top-center',
                });
            }
            }}
        className="green-button !px-12 !py-4"><p className='pt-2'>Check</p>
      </button>


        <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>🎉 Lesson Completed!</AlertDialogTitle>
            <AlertDialogDescription className="text-paragraph">
                <div className='flex flex-col space-y-2 items-center'>
                    <Image src='/assets/lessons/pink-shape.svg' className='w-[80] sm:w-[100] md:w-[120]' alt='Pink Celebratory Shape' width={ 131 } height={ 121 } />
                    <div>Well done. You've completed all the activities in this lesson.</div>
                </div>
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogAction className='green-button' onClick={() => router.push('/lessons')}>
                <div className='mt-2'>Back to Lessons</div>
            </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>


      















      
    </DndContext>
  );
};
