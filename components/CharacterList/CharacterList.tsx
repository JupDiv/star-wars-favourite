/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { addPersons } from '../../redux/slices/charactersDataSlice';
import FetchCharacters from '../../utlis/FetchCharacters/FetchCharacters';
import type { CharasterTypes } from '../../entites/types/CharasterTypes';
import CharacterCard from '../CharacterCard/CharacterCard';
import { MainWindowView } from './CharacterList.styled';
import PaginationControls from '../PaginationControls/PaginationControls';
import FavoriteStats from '../FavoriteStats/FavoriteStats';

function CharacterList() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.persons);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  useEffect(() => {
    FetchCharacters(currentPage).then((response) => {
      dispatch(addPersons(response));
    });
  }, [currentPage, dispatch]);

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <MainWindowView>
      <FavoriteStats isToggle={isToggle} setIsToggle={setIsToggle} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CharacterCard isToggle={isToggle} {...item} />
        )}
        keyExtractor={(item: CharasterTypes) => item.id}
      />

      <PaginationControls
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </MainWindowView>
  );
}

export default CharacterList;
