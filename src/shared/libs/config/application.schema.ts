import convict from 'convict';
import validator from 'convict-format-with-validator';

convict.addFormats(validator);

export type ApplicationSchema = {
  HOST: string,
  PORT: number,
  DATABASE_HOST: string,
  DATABASE_PORT: string,
  DATABASE_USER: string,
  DATABASE_PASSWORD: string,
  DATABASE_NAME: string,
  SALT: string,
  STATIC_ROOT: string,
  JWT_SECRET: string
}

export const configApplicationSchema = convict<ApplicationSchema>({
  HOST: {
    doc: 'Host for incoming connections',
    format: 'url',
    env: 'HOST',
    default: 'http://localhost:4000'
  },
  PORT: {
    doc: 'Port for incoming connections',
    format: 'port',
    env: 'PORT',
    default: 4000
  },
  DATABASE_HOST: {
    doc: 'Database connection uri',
    format: 'url',
    env: 'DATABASE_HOST',
    default: null
  },
  DATABASE_PORT: {
    doc: 'Database connection port',
    format: 'port',
    env: 'DATABASE_PORT',
    default: '27017'
  },
  DATABASE_USER: {
    doc: 'Database user name',
    format: String,
    env: 'DATABASE_USER',
    default: null
  },
  DATABASE_PASSWORD: {
    doc: 'Database password',
    format: String,
    env: 'DATABASE_PASSWORD',
    default: null
  },
  DATABASE_NAME: {
    doc: 'Database name',
    format: String,
    env: 'DATABASE_NAME',
    default: 'six-cities'
  },
  SALT: {
    doc: 'Salt for data encryption',
    format: String,
    env: 'SALT',
    default: null
  },
  STATIC_ROOT: {
    doc: 'Root path for static files',
    format: String,
    env: 'STATIC_ROOT',
    default: null
  },
  JWT_SECRET: {
    doc: 'Secret for sign jwt',
    format: String,
    env: 'JWT_SECRET',
    default: null
  }
});
