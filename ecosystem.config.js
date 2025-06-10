// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'docusaurus',
      script: 'pnpm',
      args: 'serve',
      cwd: '/root/remotecord/remotecord-docs', // Change this to your Docusaurus directory
      env: {
        NODE_ENV: 'production',
        PORT: 3000, // You can change the port if needed
      },
    },
  ],
};
