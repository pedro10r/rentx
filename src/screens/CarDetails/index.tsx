import { BackButton } from '@components/BackButton';
import { ImageSlider } from '@components/ImageSlider';
import { Container, Header, CarImages } from './styles';

export function CarDetails() {
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

    </Container>
  );
}