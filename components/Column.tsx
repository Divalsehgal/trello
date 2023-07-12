import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};
const idColumnToText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  inprogress: "In progress",
  done: "Done",
};
function Column({ index, todos, id }: Props) {
  return (
    <div>
      <Draggable index={index} draggableId={id}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <Droppable droppableId={index.toString()} type="card">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`p-2 rounded-2xl shadow-sm ${
                      snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                    }`}
                  >
                    <h2 className="flex justify-between p-2 font-bold text-xl">
                      {idColumnToText[id]}
                      <span className="text-gray-500 text-sm px-2 py-1 bg-gray-200 rounded-full font-normal">
                        {todos.length}
                      </span>
                    </h2>
                    <div className="space-y-2">
                      {todos.map((todo, index) => {
                        return (
                          <Draggable
                            index={index}
                            key={todo.$id}
                            draggableId={todo.$id}
                          >
                            {(provided, snapshot) => (
                              <>
                                <TodoCard
                                  todo={todo}
                                  id={id}
                                  innerRef={provided.innerRef}
                                  dragHandleProps={provided.dragHandleProps}
                                  draggableProps={provided.draggableProps}
                                />
                              </>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                      <div className="flex justify-end items-end">
                        <button className="text-green-500 hover:text-green-600">
                          <PlusCircleIcon className="h-10 w-10" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Droppable>
            </div>
          </>
        )}
      </Draggable>
    </div>
  );
}

export default Column;
