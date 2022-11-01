import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import GasolineSvg from '@assets/gasoline.svg';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

type CardData = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  }
  thumbnail: string;
}

type Props = TouchableOpacityProps & {
  data: CardData;
}

export function Car({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.name}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{ uri: data.thumbnail }}
        resizeMode="contain"
      />
    </Container>
  );
}