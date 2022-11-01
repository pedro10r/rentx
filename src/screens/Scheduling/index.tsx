import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '@components/BackButton';

import ArrowSvg from '@assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateAreaValue,
  DateValue,
  Content,
  Footer,
} from './styles';
import { Button } from '@components/Button';
import { Calendar } from '@components/Calendar';

export function Scheduling() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('scheduling_details')
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <Header>
        <BackButton
          color={colors.shape}
          onPress={() => {}}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateAreaValue selected={false}>
              <DateValue>
                01/11/2022
              </DateValue>
            </DateAreaValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DateAreaValue selected={false}>
              <DateValue>
                01/11/2022
              </DateValue>
            </DateAreaValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleConfirmRental} />
      </Footer>

    </Container>
  );
}