"use client"

import { useDroppable } from "@dnd-kit/core";


interface DropZoneProps {
    id: any,
    value: any
}

export const DropZone = ({ id, value } : DropZoneProps) => {
  const { setNodeRef } = useDroppable({ id });
  return (
    <span
      ref={setNodeRef}
      className="inline-block min-w-[100px] px-2 py-1 border-b-2 border-dashed border-gray-400 text-center"
    >
      {value || ''}
    </span>
  );
};
