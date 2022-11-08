import { Container } from './styles';
import LottieView from 'lottie-react-native';

import loadingCar from '../../assets/loadingCar.json';

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        style={{ height: 200 }}
        resizeMode='contain'
        loop
      />

    </Container>
  );
}