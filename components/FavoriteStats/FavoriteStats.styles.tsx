import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { colors, typography } from '../../styles/theme';

export const BlockWindow = styled(View)``;

export const HeaderCountTab = styled(View)`
  position: stycky;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 100px;
`;
export const FavouriteWindow = styled(View)`
  border: 2px solid yellow;
  width: 120px;
  height: 80px;
`;
export const StyledCurrentFans = styled(Text)`
  margin: 0;
  padding-top: 15px;
  font-size: 20px;
  text-align: center;
`;
export const StyledText = styled(Text)``;

export const StyledResetButtom = styled(Button)`
  margin: 0;
  padding-top: 15px;
  font-size: 20px;
`;

export const HeaderContainer = styled.View`
  background-color: ${colors.secondary};
  padding: 16px;
`;

export const HeaderTitle = styled.Text`
  display: flex;
  flex-direction: column;
  font-family: ${typography.title.fontFamily};
  font-size: ${typography.title.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
`;
