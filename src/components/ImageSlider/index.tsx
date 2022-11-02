import { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

type Props = {
  imagesUrl: string[],
}

type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <ImageIndex
            key={String(index)}
            active={index === imageIndex}
          />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage
              source={{ uri: item }}
              resizeMode="contain"
            />
          </CarImageWrapper>
        )}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}