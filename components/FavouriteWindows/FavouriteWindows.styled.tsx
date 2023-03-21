import styled from 'styled-components';
import { View, Text, Button } from 'react-native';

export const BlockWindow = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 100px;
`;
export const FavouriteWindow = styled(View)`
  border: 2px solid black;
  width: 120px;
  height: 80px;
`;
export const StyledCurrentFans = styled(Text)`
  margin: 0;
  padding-top: 15px;
  font-size: 20px;
  text-align: center;
`;
export const StyledText = styled(Text)`
  margin: 0;
  font-size: 20px;
  color: black;
  margin-top: 15px;
  text-align: center;
`;

export const StyledResetButtom = styled(Button)`
  margin: 0;
  padding-top: 15px;
  font-size: 20px;
`;
