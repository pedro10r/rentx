import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { CarDetails } from '@screens/CarDetails';
import { Scheduling } from '@screens/Scheduling';
import { SchedulingDetails } from '@screens/SchedulingDetails';
import { SchedulingComplete } from '@screens/SchedulingComplete';
import { MyCars } from '@screens/MyCars';
import { Splash } from '@screens/Splash';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName='splash'
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name='splash'
        component={Splash}
      />
      <Screen
        name='home'
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen
        name='car_details'
        component={CarDetails}
      />
      <Screen
        name='scheduling'
        component={Scheduling}
      />
      <Screen
        name='scheduling_details'
        component={SchedulingDetails}
      />
      <Screen
        name='scheduling_complete'
        component={SchedulingComplete}
      />
      <Screen
        name='my_cars'
        component={MyCars}
      />
    </Navigator>
  );
}