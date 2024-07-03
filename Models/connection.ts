import { Sequelize } from 'sequelize';

// Create sequelize instance with logging enabled
const connection = new Sequelize('course', 'anoosha', 'anoosha', {
    host: 'localhost',
    dialect: 'postgres'
});
export{connection};