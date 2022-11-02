import { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import LogoSvg from '@assets/logo.svg';

import { Car } from '@components/Car';
import { Load } from '@components/Load';

import { api } from '../../services/api';
import { CarDTO } from '@dtos/CarDTO';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  MyCarsButton
} from './styles';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const { colors } = useTheme();

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('car_details', { car });
  }

  function handleOpenMyCars() {
    navigation.navigate('my_cars');
  }

  async function fetchCars() {
    try {
      const response = await api.get('/cars');
      setCars(response.data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

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
            Total de {cars.length} carros
          </TotalCars>
        </HeaderContent>
      </Header>
      
      {loading ? <Load /> :
        <FlatList
          data={cars}
          keyExtractor={item => item.id}
          contentContainerStyle={{ padding: 24 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Car
              data={item}
              onPress={() => handleCarDetails(item)}
            />
          )}
        />
      }

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={colors.shape}
        />
      </MyCarsButton>
    </Container>
  );
}