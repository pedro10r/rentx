import { useNavigation } from '@react-navigation/native';

import { Accessory } from '@components/Accessory';
import { BackButton } from '@components/BackButton';
import { ImageSlider } from '@components/ImageSlider';

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
  About,
  Acessories,
  Footer,
} from './styles';
import { Button } from '@components/Button';

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('scheduling')
  }

  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => {}}
        />
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

        <About>
          Este é automóvel desportivo.
          Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button
          title='Escolher período do aluguel'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}