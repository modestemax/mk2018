module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: "KAMTO18",
      script: 'cap',
      args: 'serve',
      "exec_mode": "cluster",
      env: {},
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
      ref: 'origin/master',
      repo: 'https://github.com/modestemax/mk2018.git',
      path: '/home/ubuntu/mk2018',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev'
    }
  }
};
