import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors, typography } from '../../styles/theme';

export const BlockButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

export const PaginationButtonStyle = styled.TouchableOpacity`
  position: relative;
  width: 100px;
  height: 50px;
  background-color: ${colors.primary};
  padding: 10px 28px;
  text-align: center;
`;

export const PaginationButtonText = styled.Text`
  color: ${colors.dark};
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
`;
