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
}




export const FillInTheBlankQuestion = ({ question }: FillInTheBlankQuestionProps) => {
  const [droppedValue, setDroppedValue] = useState<string | null>(null);

  const handleDragEnd = (event: any) => {
    const { over, active } = event;
    if (over?.id === 'blank') {
      setDroppedValue(active.id);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      {/* Sentence */}
      <p className="text-lg font-medium">
        The <DropZone id="blank" value={droppedValue} /> is the largest planet.
      </p>

      {/* Options */}
      <div className="flex gap-4 mt-4">
        {question.options.map((opt) => (
          <DraggableOption key={opt} id={opt} label={opt} />
        ))}
      </div>

      {/* Check Button */}
      <button
        onClick={() => {
          if (droppedValue === question.answer[0]) {
            toast("Correct!", { description: "Well done!" });
            // advance to next question here
          } else {
            toast("Oops!", { description: "Try again." });
          }
        }}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Check
      </button>
    </DndContext>
  );
};
