import styled from 'styled-components/native';
import { colors, typography } from '../../styles/theme';

export const CharasterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: ${colors.primary};
  margin-top: 10px;
`;

export const CharasterButtonText = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  color: ${colors.dark};
`;

export const CharasterContainer = styled.View`
  background-color: ${colors.secondary};
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
`;

export const CharasterSubtitle = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  color: ${colors.primary};
  border: 3px solid ${colors.dark};
  border-radius: 8px;
  padding: 5px;
`;

export const CharasterBody = styled.Text`
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize}px;
  color: ${colors.light};
`;
