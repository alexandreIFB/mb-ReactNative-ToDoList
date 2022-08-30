import { StyleSheet } from "react-native";
import { defaulColors } from "../../style/defaulColors";



export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: defaulColors.gray[300]
  },
  textContainer: {
    marginTop: 16,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: defaulColors.gray[300],
    fontSize: 14,
  }
})