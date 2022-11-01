import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

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

export function Scheduling() {
  const { colors } = useTheme();

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

      </Content>

      <Footer>
        <Button title='Confirmar'/>
      </Footer>

    </Container>
  );
}