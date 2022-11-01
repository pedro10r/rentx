import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type ButtonProps = {
  color: string;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  background-color: ${({ theme, color }) => color ? color : theme.colors.main};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
