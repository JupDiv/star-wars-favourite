import { useState } from 'react';
import { TitleStyle, ButtonStyle } from './Titile.style';
import PersonData from '../PersonData/PersonData';
import { Person } from '../../entites/types/Person';

const Title: React.FC<Person> = ({ name, ...other }): JSX.Element => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <TitleStyle>
      <ButtonStyle
        color="#f194ff"
        onPress={() => setStatus(!status)}
        title={name}
      />
      {status ? <PersonData name={name} {...other} /> : null}
    </TitleStyle>
  );
};

export default Title;
