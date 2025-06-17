"use client"

import { useDroppable } from "@dnd-kit/core";


interface DropZoneProps {
    id: any,
    value: any
}

export const DropZone = ({ id, value }: DropZoneProps) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <span
      ref={setNodeRef}
      className={`inline-block min-w-[100px] min-h-[100px] px-2 py-1 border-2 rounded-md transition-colors duration-200 ${
        isOver ? 'border-playbits-blue-900 bg-blue-100' : 'border-dashed border-gray-400'
      } text-center align-middle`}
    >
      {value || ''} {/* Placeholder if empty */}
    </span>
  );
};
