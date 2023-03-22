import { useState } from 'react';
import { TitleStyle, ButtonStyle } from './Titile.style';
import PersonData from '../PersonData/PersonData';
import { Person } from '../../entites/types/Person';

type TitleProps = {
  setIsToggle: (value: boolean) => void;
  isToggle: boolean;
};

function Title({ name, id, setIsToggle, ...other }: Person & TitleProps) {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <TitleStyle>
      <ButtonStyle
        color="#f194ff"
        onPress={() => setStatus(!status)}
        title={name}
      />
      <PersonData name={name} setIsToggle={setIsToggle} {...other} />
    </TitleStyle>
  );
}

export default Title;
