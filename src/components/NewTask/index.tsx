import { useContext, useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { TasksContext } from "../../contexts/TasksContext";
import { defaulColors } from "../../style/defaulColors";
import { styles } from "./style";



export function NewTask() {
  const [inputText, setInputText] = useState('')
  const { createNewTask } = useContext(TasksContext)

  function handleChangeInputText(text: string) {
    setInputText(text)
  }

  function handlePressNewTask() {
    createNewTask(inputText)
    setInputText('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={defaulColors.gray[300]}
        onChangeText={handleChangeInputText}
        value={inputText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handlePressNewTask}
      >
        <Image source={require('../../../assets/plus.png')} />
      </TouchableOpacity>
    </View>
  )
}