import { View } from "react-native";
import { ListHeader } from "../ListHeader";
import { ListTasks } from "../ListTasks";
import { styles } from "./styles";


export function Tasks() {

  return (
    <View style={styles.container}>
      <ListHeader />

      <ListTasks />
    </View>
  )
}