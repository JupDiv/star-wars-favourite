import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { addPersons } from '../../redux/reducers/starwarsSlice';
import getPersons from '../../utlis/getPersons/getPersons';
import type { Person } from '../../entites/types/Person';
import Title from '../Title/Title';
import {
  MainWindowView,
  ButtonStyle,
  BlockButton,
  CurrentPage,
} from './MainPage.styled';
import getPagination from '../../utlis/pagination/getMainData';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.persons);
  const [currentPage, setCurrentPage] = useState<number>(1);

  if (currentPage < 1) {
    setCurrentPage(1);
  }

  useEffect(() => {
    getPersons(currentPage).then((data) => {
      dispatch(addPersons(data));
    });
    getPagination();
  }, [currentPage]);

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <MainWindowView>
      <StatusBar style="auto" />
      <FlatList
        data={data}
        renderItem={({ item }) => <Title {...item} />}
        keyExtractor={(item: Person) => item.id}
      ></FlatList>
      <BlockButton>
        <ButtonStyle
          title={`Back`}
          onPress={() => setCurrentPage(currentPage - 1)}
        />
        <CurrentPage>{currentPage}</CurrentPage>
        <ButtonStyle
          title={`Next`}
          onPress={() => setCurrentPage(currentPage + 1)}
        />
      </BlockButton>
    </MainWindowView>
  );
};

export default MainPage;
