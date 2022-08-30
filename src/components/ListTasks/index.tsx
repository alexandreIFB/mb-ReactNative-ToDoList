import { useContext, useMemo } from "react"
import { FlatList, View } from "react-native"
import { Task, TasksContext } from "../../contexts/TasksContext"
import { CardTask } from "../CardTask"
import { EmptyTask } from "../EmptyTask"
import { styles } from "./styles"




export function ListTasks() {
  const { tasks, deleteTask, changeTaskCheckValue, tasksFilter } = useContext(TasksContext)

  function handleDeleteTask(item: Task) {
    deleteTask(item.id)
  }

  function handleCheckTask(item: Task) {
    changeTaskCheckValue(item.id)
  }

  const tasksSort = useMemo(() => (
    tasksFilter.sort((a, b) => {
      return (a.check === b.check) ? 0 : a.check ? 1 : -1
    })
  ), [tasksFilter])

  return (
    <FlatList
      data={tasksSort}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardTask task={item} onDelete={handleDeleteTask} onCheck={handleCheckTask} />
      )}
      ListEmptyComponent={<EmptyTask />}
      showsVerticalScrollIndicator={false}
    />
  )
}