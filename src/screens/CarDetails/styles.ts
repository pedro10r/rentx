import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-left: 24px;
`;

 export const CarImages = styled(SafeAreaView)`
  margin-top: 10px;
`;