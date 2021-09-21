import {Column, DataType, Model, Table} from "sequelize-typescript";

interface UserCreationAttrs{
    name: string,
    role: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User,UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING})
    name: string;
    @Column({type: DataType.STRING})
    email: string;
    @Column({type: DataType.STRING})
    role: string;
    @Column({type: DataType.STRING})
    password: string
}