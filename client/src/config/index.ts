const env = import.meta.env;

interface EnvConfig {
  baseURL: string;
}

const config: Record<string, EnvConfig> = {
  development: {
    baseURL: 'http://localhost:5001',
  },
  production: {
    baseURL: 'http://localhost:5001',
  },
};

export default {
  baseURL: config[env.MODE].baseURL,
};
