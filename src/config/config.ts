import * as dotenv from 'dotenv';

dotenv.config();

interface ConfigInterface {
  SERVER_PORT: string;
  NODE_ENV: string;
	DATABASE_URL: string
}

export const config: ConfigInterface = {
  SERVER_PORT: process.env.PORT || '',
  NODE_ENV: process.env.NODE_ENV || '',
	DATABASE_URL: process.env.DATABASE_URL || ''
};