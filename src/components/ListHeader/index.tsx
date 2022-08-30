import { useContext, useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TasksContext } from "../../contexts/TasksContext";
import { defaulColors } from "../../style/defaulColors";
import { styles } from "./styles";

export function ListHeader() {

  const { tasks, changeFilterValue } = useContext(TasksContext)
  const [activeCheck, setActiveCheck] = useState(false)
  const [activeNotCheck, setActiveNotCheck] = useState(false)

  const { countCheck, countNotCheck } = useMemo(() => {
    const countCheck = tasks.reduce((acc, task) => {
      if (!task.check) {
        return acc
      }
      return acc += 1
    }, 0)
    const countNotCheck = tasks.length

    return {
      countCheck,
      countNotCheck
    }
  }, [tasks])


  useEffect(() => {
    if (activeCheck) return changeFilterValue("check")

    if (activeNotCheck) return changeFilterValue("notCheck")

    return changeFilterValue('default')
  }, [activeCheck, activeNotCheck])

  function handleFilterCheckTask() {
    if (activeNotCheck) setActiveNotCheck(false)
    setActiveCheck(prevState => (!prevState))
  }

  function handleFilterNotCheckTask() {
    if (activeCheck) setActiveCheck(false)
    setActiveNotCheck(prevState => (!prevState))
  }



  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerColumn}
        onPress={handleFilterNotCheckTask}
      >
        <Text style={styles.textCreate}>
          Criadas
        </Text>
        <Text style={activeNotCheck ? styles.textActive : styles.textCounter}>
          {countNotCheck}
        </Text>
      </TouchableOpacity>
      <View style={styles.containerColumn}>
      </View>

      <View>
        <TouchableOpacity
          style={styles.containerColumn}
          onPress={handleFilterCheckTask}
        >
          <Text style={styles.textCheck}>
            Concluídas
          </Text>
          <Text style={activeCheck ? styles.textActive : styles.textCounter}>
            {countCheck}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}