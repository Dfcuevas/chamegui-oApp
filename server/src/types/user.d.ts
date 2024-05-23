import { Model } from 'sequelize';

type Role = 'adopter' | 'rescuer';

export interface IUser {
    name: string;
    email: string;
    password: string;
    role: Role;
}

export interface IUserModel extends Model, IUser {
    createdAt: Date;
    updatedAt: Date;
}