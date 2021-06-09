module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://postgres:4245@localhost:5432/community_forum'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};
