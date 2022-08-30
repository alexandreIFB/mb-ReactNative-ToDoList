import React, { ReactNode, useMemo, useState } from "react"


export interface Task {
  id: string,
  check: boolean,
  description: string
}

interface IPropsContext {
  createNewTask: (task: string) => void
  deleteTask: (taskId: string) => void
  changeTaskCheckValue: (taskId: string) => void,
  changeFilterValue: (filter: 'check' | 'notCheck' | 'default') => void
  tasks: Task[]
  tasksFilter: Task[]
}

export const TasksContext = React.createContext({} as IPropsContext)


interface TasksContextProviderProps {
  children: ReactNode
}



export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<'check' | 'notCheck' | 'default'>('default')


  function changeFilterValue(newFilter: 'check' | 'notCheck' | 'default') {
    setFilter(newFilter)
  }

  const tasksFilter = useMemo(() => {
    switch (filter) {
      case ('check'):
        return tasks.filter((task) => task.check)
      case ('notCheck'):
        return tasks.filter((task) => !task.check)
      case ('default'):
        return tasks
    }
  }, [filter, tasks])

  function createNewTask(description: string) {
    const newTask: Task = {
      id: new Date().getTime() + '',
      check: false,
      description
    }

    setTasks((prevState) => ([
      ...prevState,
      newTask
    ]))
  }

  function deleteTask(taskId: string) {
    setTasks((prevState) => (
      prevState.filter((task) => task.id !== taskId)
    ))
  }

  function changeTaskCheckValue(taskId: string) {
    setTasks((prevState) =>
      prevState.map((state) => {
        if (state.id === taskId) {
          return { ...state, check: !state.check }
        }
        return state
      }),
    )
  }

  return (
    <TasksContext.Provider value={{
      createNewTask,
      deleteTask,
      changeTaskCheckValue,
      changeFilterValue,
      tasks,
      tasksFilter
    }}>
      {children}
    </TasksContext.Provider>
  )
}