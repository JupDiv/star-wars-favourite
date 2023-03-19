import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import type { Person } from '../../entites/types/Person';
import Planet from '../../entites/types/Planet';
import getPlanet from '../../utlis/getPlanet/getPlanet';
import getSpecies from '../../utlis/getSpec/getSpecies';

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
    <View>
      <View>
        <Text>Name : {name}</Text>
        <Text>BY : {birth_year}</Text>
        <Text>Gender : {gender}</Text>
        <Text>HW : {planet}</Text>
        <Text>Species: {spec}</Text>
      </View>
    </View>
  );
};

export default PersonData;
