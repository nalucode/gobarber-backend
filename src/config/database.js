module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'luan',
  port: '5433',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
