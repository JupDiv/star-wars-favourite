/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import type { Person } from '../../entites/types/Person';
import getPlanet from '../../utlis/getPlanet/getPlanet';
import getSpecies from '../../utlis/getSpec/getSpecies';
import {
  StyledView,
  StyledText,
  StyledFavouriteButtom,
} from './PersonData.style';
import { addFavouritePerson } from '../../redux/reducers/favouritePersonSlice';

function PersonData({
  name,
  homeworld,
  gender,
  birth_year,
  species,
}: Person): JSX.Element {
  const dispatch = useAppDispatch();

  const [planet, setPlanet] = useState<string>();
  const [spec, setSpec] = useState<string>();

  useEffect(() => {
    getPlanet(homeworld).then((data) => {
      setPlanet(data);
    });
    species.forEach((personSpec): void => {
      getSpecies(personSpec).then((response) => {
        setSpec(response);
      });
    });
  }, [homeworld, species]);

  return (
    <StyledView>
      <StyledText>Name : {name}</StyledText>
      <StyledText>BY : {birth_year}</StyledText>
      <StyledText>Gender : {gender}</StyledText>
      <StyledText>HW : {planet}</StyledText>
      <StyledText>Species: {spec}</StyledText>
      <StyledFavouriteButtom
        title="Favourite"
        onPress={() => dispatch(addFavouritePerson(gender))}
      />
    </StyledView>
  );
}

export default PersonData;
