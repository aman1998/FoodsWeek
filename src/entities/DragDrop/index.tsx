import { DragDropContext, DropResult, Droppable, Draggable } from "react-beautiful-dnd";

import { IDragDropProps } from "./types";

const DragDrop = <T,>({ handleNewList, data, renderItem, className = "" }: IDragDropProps<T>): JSX.Element => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination || !data?.length) return;

    const newItems = [...data];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    handleNewList(newItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="items">
        {provided => (
          /*  console error <tr> cannot appear as a child of <div>. In future need refactoring for tables this layout */
          <div className={className} {...provided.droppableProps} ref={provided.innerRef}>
            {data?.map((item, index) => (
              <Draggable key={index} draggableId={String(index)} index={index}>
                {provided => (
                  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    {renderItem(item)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDrop;
