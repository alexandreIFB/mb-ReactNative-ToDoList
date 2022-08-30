import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../../contexts/TasksContext";
import { styles } from "./styles";

type Props = {
  task: Task,
  onDelete: (item: Task) => void
  onCheck: (item: Task) => void
}

export function CardTask({ task, onDelete, onCheck }: Props) {

  function handlePressDelete() {
    Alert.alert("Remover", `Realmente deseja remover a tarefa 
    ${task.description}`, [
      {
        text: 'Sim',
        onPress: () => onDelete(task)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handlePressCheck() {
    onCheck(task)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePressCheck}
      >
        {task.check && <Image source={require('../../../assets/check.png')} />}
        {!task.check && <Image source={require('../../../assets/check-empty.png')} />}

      </TouchableOpacity>
      {!task.check && (<Text style={styles.text}>
        {task.description}
      </Text>)}
      {task.check && (<Text style={styles.textCheck}>
        {task.description}
      </Text>)}
      <TouchableOpacity
        onPress={handlePressDelete}
      >
        <Image source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}