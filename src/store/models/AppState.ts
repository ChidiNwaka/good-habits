import { IUser } from '../../app/models/users';
import { IHabit } from '../../app/models/habits';

export interface IAppState {
    habits: IHabit[];
    todayDate: Date;
    user: IUser;
}
