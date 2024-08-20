import { DataTypes } from "sequelize";
import sequelize from '../database.js';

const User = sequelize.define('User',
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        usename:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:
        {
            type: DataTypes.STRING,
            allowNull:false
        }

    }
)


export default User