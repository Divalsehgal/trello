"use Client";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { Client } from "appwrite";
import React from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
  todo: Todo;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
  draggableProps: DraggableProvidedDraggableProps;
};

function TodoCard({
  todo,
  id,
  innerRef,
  dragHandleProps,
  draggableProps,
}: Props) {
  return (
    <div {...dragHandleProps} {...draggableProps} ref={innerRef} className="bg-white rounded-md space-y-2 drop-shadow-md">
      <div className="flex justify-between items-center p-5">
        <p>{todo?.title}</p>
        <button className="text-red-500 hover:text-red-600 ">
          <XCircleIcon className=" h-8 w-8" />
        </button>
      </div>
      {/* add images here   */}
    </div>
  );
}

export default TodoCard;
