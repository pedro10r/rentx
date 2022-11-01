import { FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoSvg from '@assets/logo.svg';

import { Car } from '@components/Car';

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
} from './styles';

export function Home() {
  const navigation = useNavigation();

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail: 'https://www.pngall.com/wp-content/uploads/2016/05/Audi-PNG-Picture.png'
  }

  function handleCarDetails() {
    navigation.navigate('car_details');
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <LogoSvg
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      
      <FlatList
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        contentContainerStyle={{ padding: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Car
            data={carData}
            onPress={handleCarDetails}
          />
        )}
      />
    </Container>
  );
}