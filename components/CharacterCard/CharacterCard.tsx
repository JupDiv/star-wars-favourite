import { useState } from 'react';
import { TitleStyle, ButtonStyle } from './CharacterCard.styles';
import {
  CardContainer,
  CardSubtitle,
  CardBody,
} from '../CharacterCard/CharacterCard.styles';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { CharasterTypes } from '../../entites/types/CharasterTypes';

type TitleProps = {
  isToggle: boolean;
};

function CharacterCard({ name, ...other }: CharasterTypes & TitleProps) {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <CardContainer>
      <CardSubtitle
        color="#f194ff"
        onPress={() => setStatus(!status)}
        title={name}
      />
      <CharacterDetails name={name} {...other} />
    </CardContainer>
  );
}

export default CharacterCard;
