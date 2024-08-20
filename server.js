import sequelize from "./database.js";
import User from "./models/User.js";


sequelize.sync({force:true})