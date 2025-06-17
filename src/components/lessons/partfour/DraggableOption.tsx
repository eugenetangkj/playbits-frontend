import { useDraggable } from "@dnd-kit/core";

interface DraggableOptionProps {
    id: any,
    label: any
}

export const DraggableOption = ({ id, label }: DraggableOptionProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="px-3 py-2 bg-white border rounded shadow cursor-pointer"
    >
      {label}
    </div>
  );
};
