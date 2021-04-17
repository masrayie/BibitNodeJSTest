// const dbConn = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : '127.0.0.1',
//       user : 'root',
//       password : '',
//       database : 'db_search_movie_bibit'
//     }
// })

const dbConn = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : '5433',
    user : 'postgres',
    password : 'adminsuper123',
    database : 'db_search_movies_bibit'
  }
})

module.exports = dbConn