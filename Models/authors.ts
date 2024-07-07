import { Sequelize, DataTypes } from 'sequelize';
import { connection } from '../config/connection';
const sequelize=connection;
const authors =sequelize.define(
    'author',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        birth_year:{
            type:DataTypes.INTEGER,
        },
        nationality:{
            type:DataTypes.STRING(100),
        }
    },
    {
        tableName:'authors',
        timestamps:false
    }
);
export {authors};
