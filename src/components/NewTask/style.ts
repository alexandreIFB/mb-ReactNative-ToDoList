import { StyleSheet } from "react-native";
import { defaulColors } from "../../style/defaulColors";


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%'
  },
  input: {
    backgroundColor: defaulColors.gray[500],
    fontSize: 16,
    color: defaulColors.gray[100],
    padding: 16,
    borderRadius: 6,
    flex: 1,
    marginRight: 4
  },
  button: {
    padding: 18,
    backgroundColor: defaulColors.product["blue-dark"],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  }
})