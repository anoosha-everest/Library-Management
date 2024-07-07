import { Sequelize, DataTypes } from 'sequelize';
import {authors} from './authors';
import { connection } from '../config/connection';
const sequelize=connection;
export const books=sequelize.define(
    'books',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        title:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        authorId:{
            type:DataTypes.INTEGER,
            references:{
                model:authors,
                key:'id'
            }
        },
        genre:{
            type:DataTypes.STRING(100),
        },
        isbn:{
            type:DataTypes.STRING(13),
            unique:true,
        },
        publication_year:{
            type:DataTypes.INTEGER,
        }
    },{
        tableName:'books',
        timestamps:false
    }
)
