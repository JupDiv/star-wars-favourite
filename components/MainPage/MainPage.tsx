/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { addPersons } from '../../redux/reducers/starwarsSlice';
import getPersons from '../../utlis/getPersons/getPersons';
import type { Person } from '../../entites/types/Person';
import Title from '../Title/Title';
import { MainWindowView, BlockWindow } from './MainPage.styled';
import Direction from '../Pagination/Direction';
import FavouriteWindows from '../FavouriteWindows/FavouriteWindows';

function MainPage() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.persons);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getPersons(currentPage).then((response) => {
      dispatch(addPersons(response));
    });
  }, [currentPage, dispatch]);

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <MainWindowView>
      <BlockWindow>
        <StatusBar style="auto" />
        <FavouriteWindows />
        <FlatList
          data={data}
          renderItem={({ item }) => <Title {...item} />}
          keyExtractor={(item: Person) => item.id}
        />
        <Direction currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </BlockWindow>
    </MainWindowView>
  );
}

export default MainPage;
