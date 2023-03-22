import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors, typography } from '../../styles/theme';

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${colors.secondary};
  padding: 16px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${typography.title.fontFamily};
  font-size: ${typography.title.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  color: ${colors.primary};
  border: 2px solid ${colors.primary};

  text-align: center;
`;

export const HeaderResetButton = styled(TouchableOpacity)`
  margin-top: 20px;
  background-color: ${colors.primary}};
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  height: 90px;

`;

export const HeaderCountBlock = styled.View`
  flex: 1;
`;
export const HeaderCountTab = styled.View`
  display: flex;
  flex-direction: row;
`;
export const HeaderText = styled(Text)``;
export const HeaderButtonText = styled.Text`
  color: ${colors.dark};
  font-size: 18px;
  font-weight: bold;
`;
