require('dotenv').config({ path: './.env' })
const defaultPort = 4000;

interface Environment {
  env: string,
  apollo: {
    introspection: boolean,
    port: number;
  },
  database: {
    url: string
  }
}

export const environment: Environment = {
  env: <string>process.env.NODE_ENV,
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    port: <number><unknown>process.env.PORT || defaultPort
  },
  database: {
    url: <string>process.env.DATABASE_URL
  }
};
