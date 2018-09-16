module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name      : 'API',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },

  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'ubuntu',
      "--aws--": "",
      "key1": "/home/max/.ssh/keysvirginia.pem",
      host1: '54.210.121.117',
      "--ovh--": "",
      "key": "/home/max/.ssh/id_rsa",
      host: '142.44.246.201',
      ref: 'origin/remote',
      repo: 'git@github.com:modestemax/mk2018.git',
      path: '/home/ubuntu/mk2018',
      'post-deploy': 'npm install && npm start'
    },
    dev: {
      // user: 'node',
      // host: '212.83.163.1',
      // ref: 'origin/master',
      // repo: 'git@github.com:repo.git',
      // path: '/var/www/development',
      // 'post-deploy': 'npm run install && pm2 reload ecosystem.config.js --env dev',
      // env: {
      //   NODE_ENV: 'dev'
      // }
    }
  }
};
