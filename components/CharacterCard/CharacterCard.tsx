import { useState } from 'react';
import { TitleStyle, ButtonStyle } from './CharacterCard.styles';
import {
  CardContainer,
  CardSubtitle,
} from '../CharacterCard/CharacterCard.styles';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { CharasterTypes } from '../../entites/types/CharasterTypes';

type AdditionalProps = {
  isToggle: boolean;
};

function CharacterCard({ name, ...other }: CharasterTypes & AdditionalProps) {
  return (
    <CardContainer>
      <CharacterDetails name={name} {...other} />
    </CardContainer>
  );
}

export default CharacterCard;
