import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, SafeAreaView, FlatList } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { addData } from '../../redux/reducers/starwarsSlice';
import getData from '../../utlis/getData/getData';
import type { Person } from '../../entites/types/Person';
import Title from '../Title/Title';

const MainPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.data);

  useEffect(() => {
    getData().then((data) => {
      dispatch(addData(data));
    });
  }, []);

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={data}
        renderItem={({ item }) => <Title name={item.name} />}
        keyExtractor={(item: Person) => item.name}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainPage;

/**
 * 
 * 
 state={loading} onChange={setLoading} 
 */
