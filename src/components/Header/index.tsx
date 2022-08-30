import { Image, Text } from "react-native";
import { styles } from "./styles";



export function Header() {
  return (
    <Image
      source={require('../../../assets/logo.png')}
      style={styles.image}
    />
  )
}