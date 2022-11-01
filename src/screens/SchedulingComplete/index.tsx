import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ConfirmButton } from '@components/ConfirmButton';

import LogoSvg from '@assets/logo_background_gray.svg';
import DoneDvg from '@assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <LogoSvg width={width} />

      <Content>
        <DoneDvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton
          title='OK'
          onPress={handleConfirm}
        />
      </Footer>

    </Container>
  );
}