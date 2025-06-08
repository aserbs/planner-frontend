import { useUpdateTask } from "./useUpdateTask";
import { DropResult } from '@hello-pangea/dnd'

export function useTaskDnd() {
    const { updateTask } = useUpdateTask()

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return

        const destinationColumnId = result.destination.droppableId

        // если перетащили в туже колонку(чтобы не было лишних запросов)
        if (destinationColumnId === result.source.droppableId) return

        // переход в колонку комплитед меняется только флаг у таски
        if (destinationColumnId === 'completed') {
            updateTask({
                id: result.draggableId,
                data: { isCompleted: true }
            })

            return
        }

    }

    return {}
}