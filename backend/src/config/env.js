import dotenv from 'dotenv';

dotenv.config();

const env = {
    port: process.env.PORT || 3000,
    environment: process.env.ENVIRONMENT || 'development',
    DbUrl : process.env.DB_URL || 'mongodb://localhost:27017/ecommerce',
    clerk: {
        publishableKey: process.env.CLERK_PUBLISHABLE_KEY || '',
        secretKey: process.env.CLERK_SECRET_KEY || '',
    },
    inngest: {
        signKey: process.env.INNGEST_SIGN_KEY || '',
    },
    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
        apiKey: process.env.CLOUDINARY_API_KEY || '',
        apiSecret: process.env.CLOUDINARY_API_SECRET || '',
    },
};

export default env;
