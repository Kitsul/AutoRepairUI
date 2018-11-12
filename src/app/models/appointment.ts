import { Car } from './car';
import { User } from './user';

export class Appointment {
    public startDate: string;
    public endDate: string;

    public user: User;
    public message: string;

    public car: Car;
    public servicesType: Array<string>;
}