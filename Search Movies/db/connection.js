const dbConn = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'db_search_movie_bibit'
    }
})

module.exports = dbConn