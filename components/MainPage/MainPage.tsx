import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { addPersons, addPlanet } from '../../redux/reducers/starwarsSlice';
import getPersons from '../../utlis/getPersons/getPersons';
import type { Person } from '../../entites/types/Person';
import Title from '../Title/Title';

const MainPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.persons);

  useEffect(() => {
    getPersons().then((data) => {
      dispatch(addPersons(data));
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
        renderItem={({ item }) => <Title {...item} />}
        keyExtractor={(item: Person) => item.id}
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
