import { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import { BackButton } from '@components/BackButton';
import { Button } from '@components/Button';
import { Calendar, DayProps, generateInterval, MarketDateProps } from '@components/Calendar';

import { getPlataformDate } from '../../utils/getPlataformDate';
import { CarDTO } from '@dtos/CarDTO';

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

type RentalPeriodProps = {
  startFormatted: string;
  endFormatted: string;
}

type RouteParams = {
  car: CarDTO;
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [marketDates, setMarketDates] = useState<MarketDateProps>({} as MarketDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps)

  const { colors } = useTheme();

  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as RouteParams;

  function handleConfirmRental() {
    navigation.navigate('scheduling_details', {
      car,
      dates: Object.keys(marketDates),
    })
}

  function handleGoBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;
    
    if (start.timestamp > end.timestamp) { // Logic so that the user never selects a date less than the first selected date
      start = end;                         // The smaller date always is in the _start and the larger date always is in the _end
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarketDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length -1];

    setRentalPeriod({
      startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlataformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });
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
          onPress={handleGoBack}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateAreaValue selected={!!rentalPeriod.startFormatted}>
              <DateValue>
                {rentalPeriod.startFormatted}
              </DateValue>
            </DateAreaValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DateAreaValue selected={!!rentalPeriod.endFormatted}>
              <DateValue>
              {rentalPeriod.endFormatted}
              </DateValue>
            </DateAreaValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={marketDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button
          title='Confirmar'
          onPress={handleConfirmRental}
          disabled={!rentalPeriod.endFormatted}
        />
      </Footer>

    </Container>
  );
}