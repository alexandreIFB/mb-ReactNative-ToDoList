import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { Home } from './src/pages/Home';
import { defaulColors } from './src/style/defaulColors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaulColors.gray[600],
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});
