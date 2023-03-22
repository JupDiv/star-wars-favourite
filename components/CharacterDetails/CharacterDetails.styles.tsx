import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { colors, typography } from '../../styles/theme';

export const StyledView = styled.ScrollView`
  display: flex;
  flex-direction: column;
  justifycontent: center;
`;
export const StyledText = styled.Text`
  text-align: center;
  color: #f194ff;
  border: 1px solid blue;
`;

export const CardButton = styled.Button`
  background-color: ${colors.primary};
`;

export const CardContainer = styled.View`
  background-color: ${colors.secondary};
  border-radius: 8px;
  margin: 16px;
  padding: 16px;
`;

export const CardSubtitle = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  color: ${colors.primary};
`;

export const CardBody = styled.Text`
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize}px;
  color: ${colors.light};
`;
