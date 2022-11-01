import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { Accessory } from '@components/Accessory';
import { BackButton } from '@components/BackButton';
import { ImageSlider } from '@components/ImageSlider';
import { Button } from '@components/Button';

import speedSvg from '@assets/speed.svg';
import acceletationSvg from '@assets/acceleration.svg';
import forceSvg from '@assets/force.svg';
import gasolineSvg from '@assets/gasoline.svg';
import exchangeSvg from '@assets/exchange.svg';
import peopleSvg from '@assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetail,
  RentalPriceQuote,
  RentalPriceTotal,
} from './styles';

export function SchedulingDetails() {
  const { colors } = useTheme();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['https://www.pngall.com/wp-content/uploads/2016/05/Audi-PNG-Picture.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>R-8</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 500</Price>
          </Rent>
        </Details>

        <Acessories>
          <Accessory name='380Km/h' icon={speedSvg} />
          <Accessory name='3.2s' icon={acceletationSvg} />
          <Accessory name='800 HP' icon={forceSvg} />
          <Accessory name='Gasolina' icon={gasolineSvg} />
          <Accessory name='Auto' icon={exchangeSvg} />
          <Accessory name='2 Pessoas' icon={peopleSvg} />
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>01/11/2022</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={colors.text}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>01/11/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>

          <RentalPriceDetail>
            <RentalPriceQuote>R$ 580 x3 diárias</RentalPriceQuote>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetail>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title='Alugar agora' color={colors.success} />
      </Footer>
    </Container>
  );
}