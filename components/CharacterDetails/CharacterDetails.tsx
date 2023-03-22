/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import FetchPlanetData from '../../utlis/FetchData/FetchPlanetData';
import FetchSpeciesData from '../../utlis/FetchData/FetchSpeciesData';
import {
  CharasterButton,
  CharasterBody,
  CharasterSubtitle,
  CharasterContainer,
  CharasterButtonText,
} from './CharacterDetails.styles';
import {
  addFavouriteCharaster,
  removeFavouriteCharaster,
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
      dispatch(addFavouriteCharaster({ name, gender }));
      setIsFavToggled(true);
    } else {
      dispatch(removeFavouriteCharaster({ name, gender }));
      setIsFavToggled(false);
    }
  }

  return (
    <CharasterContainer>
      <CharasterSubtitle>Name : {name}</CharasterSubtitle>
      <CharasterBody>BY : {birth_year}</CharasterBody>
      <CharasterBody>Gender : {gender}</CharasterBody>
      <CharasterBody>HW : {isHomeWorld}</CharasterBody>
      <CharasterBody>Species: {isSpecies}</CharasterBody>
      <CharasterButton onPress={() => isToggleFavourite()}>
        <CharasterButtonText>Add to favorites</CharasterButtonText>
      </CharasterButton>
    </CharasterContainer>
  );
}

export default CharacterDetails;
