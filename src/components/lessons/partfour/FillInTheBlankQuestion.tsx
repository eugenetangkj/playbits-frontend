"use client"

import {
  DndContext,
  closestCenter,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import { useState } from 'react';
import { DropZone } from './Dropzone';
import { DraggableOption } from './DraggableOption';
import { toast } from 'sonner';
import { Question } from '@/app/types/Types';


interface FillInTheBlankQuestionProps {
    question: Question
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>,
}


const splitQuestionText = (text: string): [string, string] => {
    const parts = text.split("________"); //Assume using ____ to spot
    return [parts[0] || "", parts[1] || ""];
};





export const FillInTheBlankQuestion = ({
  question,
  setCurrentQuestionIndex,
}: FillInTheBlankQuestionProps) => {
  const [droppedValue, setDroppedValue] = useState<string | null>(null);

  const parts = splitQuestionText(question.question);

  const handleDragEnd = (event: any) => {
    const { over, active } = event;
    if (over?.id === "blank") {
      setDroppedValue(active.id);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      {/* Sentence with dynamic blank */}
      <p className="text-h2-heading text-center">
        {parts[0]}
        <DropZone id="blank" value={droppedValue} />
        {parts[1]}
      </p>

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
            toast("✅ Correct!", { description: "Well done!", descriptionClassName: 'text-paragraph' });
            setTimeout(() => setCurrentQuestionIndex((prev) => prev + 1), 1000);
            setDroppedValue(null)
          } else {
            toast("❌ Oops!", { description: "Try again.", descriptionClassName: 'text-paragraph' });
          }
        }}
        className="green-button !px-12 !py-4"><p className='pt-2'>Check</p>
      </button>
    </DndContext>
  );
};
