import { useState } from 'react';
import { TitleStyle, ButtonStyle } from './CharacterCard.styles';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { CharasterTypes } from '../../entites/types/CharasterTypes';

type TitleProps = {
  isToggle: boolean;
};

function CharacterCard({ name, ...other }: CharasterTypes & TitleProps) {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <TitleStyle>
      <ButtonStyle
        color="#f194ff"
        onPress={() => setStatus(!status)}
        title={name}
      />
      <CharacterDetails name={name} {...other} />
    </TitleStyle>
  );
}

export default CharacterCard;
