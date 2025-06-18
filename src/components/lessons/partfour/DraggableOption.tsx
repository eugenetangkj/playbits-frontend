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
      className="text-lg lg:text-xl text-black rounded-lg bg-playbits-orange-300 hover:bg-[#E4B790] cursor-pointer py-6 px-7 border-b-4 border-playbits-orange-900"
    >
      {label}
    </div>
  );
};
