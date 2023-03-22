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
import {
  addFavouritePerson,
  removeFavouritePerson,
} from '../../redux/reducers/favouritePersonSlice';

function PersonData({
  name,
  homeworld,
  gender,
  birth_year,
  species,
}: Person): JSX.Element {
  const dispatch = useAppDispatch();
  const [isToggle, setIsToggle] = useState<boolean>(false);
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

  function isToggleFavourite(toggle: boolean) {
    if (!toggle) {
      setIsToggle(false);
      dispatch(addFavouritePerson({ name, gender }));
    } else {
      setIsToggle(true);
      dispatch(removeFavouritePerson({ name, gender }));
    }
  }

  return (
    <StyledView>
      <StyledText>Name : {name}</StyledText>
      <StyledText>BY : {birth_year}</StyledText>
      <StyledText>Gender : {gender}</StyledText>
      <StyledText>HW : {planet}</StyledText>
      <StyledText>Species: {spec}</StyledText>
      <StyledFavouriteButtom
        title="Favourite"
        onPress={() => isToggleFavourite(isToggle)}
      />
    </StyledView>
  );
}

export default PersonData;
