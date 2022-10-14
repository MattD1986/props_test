import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tool from './src/modules/Tool';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Below is a Tool-component with values added</Text>
      <Tool name='Matt' issue='Props'/>
      <StatusBar style="auto" />

      <Text>Below is a Tool-component without values added</Text>
      <Tool style={styles.spacing} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginStart: 20
  }
});
