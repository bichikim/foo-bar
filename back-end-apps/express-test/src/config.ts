/* eslint-disable import/no-named-as-default-member */
import dotenv from 'dotenv'

dotenv.config()

const {freeze} = Object

export const config = freeze({
  db: freeze({
    database: process.env.DB_DATABASE ?? 'main',
    synchronize: process.env.NODE_ENV !== 'production',
  }),
  port: process.env.PORT,
})
