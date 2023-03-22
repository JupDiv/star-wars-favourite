import styled from 'styled-components/native';
import { colors, typography } from '../../styles/theme';

export const TitleStyle = styled.View`
  margin-top: 10px;
  width: 200px;
`;

export const ButtonStyle = styled.Button`
  font-size: 20px;
  width: 100%;
  border: 3px solid red;
  border-radius: 10px;
  text-align: center;
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
