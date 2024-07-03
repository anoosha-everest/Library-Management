import { DataTypes } from "sequelize";
import { connection } from './connection';
const sequelize=connection;


export const members=sequelize.define(
    'members',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        address:{
            type:DataTypes.STRING(255),
        },
        phone_number:{
            type:DataTypes.STRING(20)
        },
        email:{
            type:DataTypes.STRING(255),
            unique:true,
        }
    },{
        tableName:'members',
        timestamps:false
    }
);

