/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import FetchPlanetData from '../../utlis/FetchData/FetchPlanetData';
import FetchSpeciesData from '../../utlis/FetchData/FetchSpeciesData';
import {
  StyledView,
  StyledText,
  StyledFavouriteButtom,
} from './CharacterDetails.styles';
import {
  addFavouritePerson,
  removeFavouritePerson,
} from '../../redux/slices/favoriteCharactersSlice';
import type { CharasterTypes } from '../../entites/types/CharasterTypes';

type PersonDataProps = {
  isToggle: boolean;
};

type commonCharasterType = CharasterTypes & PersonDataProps;

function CharacterDetails({
  name,
  homeworld,
  gender,
  birth_year,
  species,
  isToggle,
}: commonCharasterType): JSX.Element {
  const dispatch = useAppDispatch();
  const [isHomeWorld, setPlanet] = useState<string>();
  const [isSpecies, setSpec] = useState<string>();
  const [isFavToggled, setIsFavToggled] = useState<boolean>(false);

  useEffect(() => {
    FetchPlanetData(homeworld).then((data) => {
      setPlanet(data);
    });

    species.forEach((personSpec): void => {
      FetchSpeciesData(personSpec).then((response) => {
        setSpec(response);
      });
    });

    setIsFavToggled(false);
  }, [homeworld, species, isToggle]);

  function isToggleFavourite() {
    if (!isFavToggled) {
      dispatch(addFavouritePerson({ name, gender }));
      setIsFavToggled(true);
    } else {
      dispatch(removeFavouritePerson({ name, gender }));
      setIsFavToggled(false);
    }
  }

  return (
    <StyledView>
      <StyledText>Name : {name}</StyledText>
      <StyledText>BY : {birth_year}</StyledText>
      <StyledText>Gender : {gender}</StyledText>
      <StyledText>HW : {isHomeWorld}</StyledText>
      <StyledText>Species: {isSpecies}</StyledText>
      <StyledFavouriteButtom
        title="Favourite"
        onPress={() => isToggleFavourite()}
      />
    </StyledView>
  );
}

export default CharacterDetails;
