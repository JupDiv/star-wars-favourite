import { useState } from 'react';
import {
  CardContainer,
  CardNameButton,
  CardButtonText,
} from '../CharacterCard/CharacterCard.styles';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { CharasterTypes } from '../../entites/types/CharasterTypes';

type AdditionalProps = {
  isToggle: boolean;
};

function CharacterCard({ name, ...other }: CharasterTypes & AdditionalProps) {
  const [isOpen, setToggle] = useState<boolean>(false);
  return (
    <CardContainer>
      <CardNameButton onPress={() => setToggle(!isOpen)}>
        <CardButtonText>{name}</CardButtonText>
      </CardNameButton>
      {isOpen ? <CharacterDetails name={name} {...other} /> : null}
    </CardContainer>
  );
}

export default CharacterCard;
