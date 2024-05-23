import { Model } from 'sequelize';
import { IMessages } from './messages';
import { IUser } from './user';
import { 
  BelongsToManyAddAssociationMixin, 
  BelongsToManyGetAssociationsMixin, 
  BelongsToManyRemoveAssociationMixin } from 'sequelize';

export interface Chat {
    chat_id: string;
    title: string;
    usersInChat: string[];
}

export interface IChat extends Model, Chat {
    addUser: BelongsToManyAddAssociationMixin<IUser, 'users'>
    getUsers: BelongsToManyGetAssociationsMixin<IUser>
    removeUser: BelongsToManyRemoveAssociationMixin<IUser, 'users'>
}

export interface IChatMessage extends Chat {
    message: IMessages;
}