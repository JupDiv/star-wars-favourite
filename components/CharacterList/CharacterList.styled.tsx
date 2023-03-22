import styled from 'styled-components/native';

export const StyledText = styled.Text`
  font-size: 20px;
  color: #000000;
  text-align: center;
`;

export const MainWindowView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  backgroundcolor: white;
  margin-top: 50px;
`;

export const BlockButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

export const ButtonStyle = styled.Button`
  border: 3px solid red;
  font-size: 10px;
`;

export const CurrentPage = styled.Text`
  font-size: 20px;
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
`;
