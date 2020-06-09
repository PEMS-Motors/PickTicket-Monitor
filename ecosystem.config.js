module.exports = {
  apps: [
    {
      name: 'PEMS-Monitor',
      script: 'index.js',
      cwd: '/home/bot/PEMS-Monitor',
      instance_id_env: '0',
      watch: true,
      ignore_watch : ['node_modules', 'Logs', 'Downloads', '.git'],
      error_file: '/home/bot/PEMS-Monitor/Logs/discord-err.log',
      out_file: '/home/bot/PEMS-Monitor/Logs/discord-out.log',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};