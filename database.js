import { Sequelize } from "sequelize";

const sequelize = new Sequelize('users_system', 'root', 'new_password', { host: "89.38.128.24",
                                                                          dialect: 'mysql'})


export default sequelize;