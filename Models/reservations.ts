import { DataTypes } from 'sequelize';
import {books} from "./books";
import {members} from "./members";
import { connection } from '../config/connection';
const sequelize=connection;

export const reservations=sequelize.define(
    'reservations',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        book_id:{
            type:DataTypes.INTEGER,
            references:{
                model:books,
                key:'id'
            }
        },
        member_id:{
            type:DataTypes.INTEGER,
            references:{
                model:members,
                key:'id'
            }
        },
        reservation_date:{
            type:DataTypes.DATE,
            allowNull:false,
        }
    },{
        timestamps:false
    }
);