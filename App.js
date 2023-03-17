import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import getData from './utlis/getData/getData';
export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <View style={styles.container}>
      {data.map((person) => (
        <Text key={person.name}>
          {person.name} {person.birth_year}
          {person.gender}
        </Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
