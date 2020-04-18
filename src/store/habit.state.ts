import { IUser } from './../app/models/users';
import { habits } from 'src/app/mockData/habits';
import { IAppState } from './models/AppState';

enum USER_ROLES {
    ADMIN = 'Admin',
};

const user: IUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.Doe@example.com',
    role: USER_ROLES.ADMIN

};

export const initialState: IAppState = {
    habits,
    user,
    todayDate: new Date()
};
