import { Text, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import type { Person } from '../../entites/types/Person';

type PersonDataProps = {
  name: string;
};

const PersonData: React.FC<PersonDataProps> = ({ name }): JSX.Element => {
  const data = useAppSelector((state) => state.data.data);

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <View>
      {data.map((item: Person) => {
        if (item.name === name) {
          return (
            <View>
              <Text>Name : {item.name}</Text>
              <Text>BY : {item.birth_year}</Text>
              <Text>Gender : {item.gender}</Text>
              <Text>HW : {item.homeworld}</Text>
              <Text>Species: {item.species}</Text>
            </View>
          );
        } else {
          return null;
        }
      })}
    </View>
  );
};

export default PersonData;
