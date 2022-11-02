import { CarDTO } from './../dtos/CarDTO';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      car_details: {
        car: CarDTO,
      };
      scheduling: {
        car: CarDTO,
      };
      scheduling_details: {
        car: CarDTO,
        dates: Object,
      };
      scheduling_complete: undefined;
    }
  }
}