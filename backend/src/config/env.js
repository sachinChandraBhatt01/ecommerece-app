import dotenv from 'dotenv';

dotenv.config();

const env = {
    port: process.env.PORT || 3000,
    environment: process.env.ENVIRONMENT || 'development',
    DbUrl : process.env.DB_URL || 'mongodb://localhost:27017/ecommerce',
};

export default env;
