import { StyleSheet } from "react-native";
import { defaulColors } from "../../style/defaulColors";




export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 48
  },
  textCreate: {
    fontSize: 14,
    color: defaulColors.product.blue,
    fontWeight: "bold",
  },
  textCheck: {
    fontSize: 14,
    color: defaulColors.product.purple,
    fontWeight: "bold",
  },
  textCounter: {
    fontSize: 12,
    fontWeight: "bold",
    color: defaulColors.gray[200],
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: defaulColors.gray[400],
    borderRadius: 999,
    marginLeft: 8
  },
  textActive: {
    fontSize: 12,
    fontWeight: "bold",
    color: defaulColors.gray[400],
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: defaulColors.gray[200],
    borderRadius: 999,
    marginLeft: 8
  },
  containerColumn: {
    flexDirection: "row",
  }
})