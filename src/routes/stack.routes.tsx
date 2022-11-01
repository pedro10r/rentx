import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarDetails } from '@screens/CarDetails';
import { Home } from '@screens/Home';



const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen
        name='carDetails'
        component={CarDetails}
      />
    </Navigator>
  );
}