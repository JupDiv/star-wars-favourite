/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { useEffect, useState, useCallback } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { colors } from '../../styles/theme';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { addCharasters } from '../../redux/slices/charactersDataSlice';
import FetchCharacters from '../../utlis/FetchData/FetchCharacters';
import type { CharasterTypes } from '../../entites/types/CharasterTypes';
import CharacterCard from '../CharacterCard/CharacterCard';
import PaginationControls from '../PaginationControls/PaginationControls';
import FavoriteStats from '../FavoriteStats/FavoriteStats';

SplashScreen.preventAutoHideAsync();

const monospace = {
  monospace: require('../../../assets/fonts/SpaceMono/SpaceMono-Regular.ttf'),
};

function CharacterList(): JSX.Element {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.fetchData.charaster);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [fontsLoaded] = useFonts(monospace);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    FetchCharacters(currentPage).then((response) => {
      dispatch(addCharasters(response));
    });
  }, [currentPage, dispatch]);

  if (!fontsLoaded) {
    return null;
  }

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.dark,
      }}
      onLayout={onLayoutRootView}
    >
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
    </SafeAreaView>
  );
}

export default CharacterList;
