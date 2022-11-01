import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { CarDetails } from '@screens/CarDetails';
import { Scheduling } from '@screens/Scheduling';



const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen
        name='Scheduling'
        component={Scheduling}
      />
    </Navigator>
  );
}