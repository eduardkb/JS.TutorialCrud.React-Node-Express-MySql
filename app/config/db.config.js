const MYSQLSERVER='192.168.1.22'

module.exports = {
  HOST: MYSQLSERVER,
  USER: 'reactusr',
  PASSWORD: 'ReactusrPass1234',
  DB: 'devreactdb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
