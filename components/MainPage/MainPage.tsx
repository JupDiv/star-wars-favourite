import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { addData } from '../../redux/reducers/starwarsSlice';
import getData from '../../utlis/getData/getData';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const data = useAppSelector((state) => state.data.data);

  useEffect(() => {
    getData().then((data) => {
      dispatch(addData(data));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Star Wars</Text>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
