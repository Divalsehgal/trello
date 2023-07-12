"use client";

import useBoardStore from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
type Props = {};
function Board({}: Props) {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);
  useEffect(() => {
    getBoard();
  }, [getBoard]);
  const data = Array.from(board.columns.entries());
  const dragHandler = (result: DropResult) => {
    const { destination, draggableId, source, type } = result;

    //  check if destination is there or not random place
    if (!destination) {
      return;
    }

    //  handle column drag

    if (type === "column") {
    }

    console.log(result);
  };
  return (
    <>
      {/* The whole idea is Drag Drop context the playground then ==> Droppable Area its boundaries ==>  then Draggable its Components */}
      <DragDropContext onDragEnd={dragHandler}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <>
              {/*this below line will make sure that how to drag and drop form a grid */}
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto max-w-7xl "
              >
                {" "}
                {data.map(([id, column], index) => {
                  return (
                    <Column
                      key={id}
                      id={id}
                      todos={column?.todos}
                      index={index}
                    />
                  );
                })}
              </div>
            </>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default Board;
