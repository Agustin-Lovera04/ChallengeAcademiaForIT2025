import dotenv from 'dotenv'
import __dirname from '../__dirname.js'

dotenv.config(
    {
        override: true,
        path:`${__dirname}/.env`
    }
)


export const config = {
    CORS_ORIGIN_URL: process.env.CORS_ORIGIN_URL,
    PORT: process.env.PORT
}