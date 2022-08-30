import { StyleSheet } from "react-native";
import { defaulColors } from "../../style/defaulColors";



export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: "wrap",
    width: '100%',
    alignItems: 'center',
    paddingLeft: 12,
    paddingVertical: 12,
    paddingRight: 8,
    backgroundColor: defaulColors.gray[500],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: defaulColors.gray[400],
    marginBottom: 8
  },
  text: {
    fontSize: 14,
    color: defaulColors.gray[100],
    marginHorizontal: 8,
    flex: 1,
  },
  textCheck: {
    fontSize: 14,
    color: defaulColors.gray[300],
    marginHorizontal: 8,
    flex: 1,
    textDecorationLine: "line-through",
  }
})