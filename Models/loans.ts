import { DataTypes } from "sequelize";
import {members} from "./members";
import {books} from "./books";
import { connection } from '../config/connection';
const sequelize=connection;


export const loans=sequelize.define(
    'loans',{
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
        loan_date:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        due_date:{
            type:DataTypes.DATE,
            allowNull:false,
        }
    },{
        tableName:'loans',
        timestamps:false
    }
);

