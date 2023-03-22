import { useState } from 'react';
import { TitleStyle, ButtonStyle } from './Titile.style';
import PersonData from '../PersonData/PersonData';
import { Person } from '../../entites/types/Person';

type TitleProps = {
  isToggle: boolean;
};

function Title({ name, ...other }: Person & TitleProps) {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <TitleStyle>
      <ButtonStyle
        color="#f194ff"
        onPress={() => setStatus(!status)}
        title={name}
      />
      <PersonData name={name} {...other} />
    </TitleStyle>
  );
}

export default Title;
