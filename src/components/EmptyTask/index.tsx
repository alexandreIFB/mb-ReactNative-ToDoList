import { Image, Text, View } from "react-native";
import { styles } from "./style";

export function EmptyTask() {

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/clipboard.png')}
        style={{ marginTop: 48 }}
      />
      <View style={styles.textContainer}>
        <Text style={{ ...styles.text, fontWeight: 'bold' }}>
          Você ainda não tem tarefas cadastrada
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}