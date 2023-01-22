require('dotenv').config({ path: './.env' })
const defaultPort = 4000;

interface Environment {
  env: string,
  apollo: {
    introspection: boolean,
  },
  port: number | string;
}

export const environment: Environment = {
  env: <string>process.env.NODE_ENV,
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
  },
  port: process.env.PORT || defaultPort
};
