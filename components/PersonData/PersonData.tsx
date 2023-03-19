import { useState, useEffect } from 'react';

import type { Person } from '../../entites/types/Person';
import getPlanet from '../../utlis/getPlanet/getPlanet';
import getSpecies from '../../utlis/getSpec/getSpecies';
import { StyledView, StyledText } from './PersonData.style';

const PersonData: React.FC<Person> = ({
  name,
  homeworld,
  gender,
  birth_year,
  species,
}): JSX.Element => {
  const [planet, setPlanet] = useState<string>();
  const [spec, setSpec] = useState<string>();

  useEffect(() => {
    getPlanet(homeworld).then((data) => {
      setPlanet(data);
    });
    species.map((spec) => {
      getSpecies(spec).then((data) => {
        setSpec(data);
      });
    });
  }, []);

  return (
    <StyledView>
      <StyledText>Name : {name}</StyledText>
      <StyledText>BY : {birth_year}</StyledText>
      <StyledText>Gender : {gender}</StyledText>
      <StyledText>HW : {planet}</StyledText>
      <StyledText>Species: {spec}</StyledText>
    </StyledView>
  );
};

export default PersonData;
