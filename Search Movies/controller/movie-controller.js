const dbConn = require('../db/connection')
const axios = require('axios')

const APIKEY = 'faf7e5bb'
const URL = 'https://www.omdbapi.com'

const getAPI = (fullURL, key, query) => {
    return new Promise(callback => {
        try {

            let params = {
                apikey: key,
                ...query,
            }

            axios.get(fullURL, {
                headers : {'Content-Type':'application/json'},
                params: params
            }).then((resp) => {
                return callback({data: resp.data})
            }).catch((error) => {
                console.log(error)
                return callback({errCode: error.status, err: error.response.data})
            })
        } catch (e) {
            console.log(e)
            return callback({errCode: 500, error: "Internal Server Error"})
        }
    })
}

const getMoviesBySearch = async (req, res) => {
    const query = req.query !== undefined ? req.query : {}
    let apikey
    if (Object.keys(query).length) {
        apikey = query.apikey
    }
    try {
        const data = await getAPI(URL, apikey, query)
        let dataMovies = data.data
        if (dataMovies.err) {
            res.status(200).send({err: dataMovies.err})
        } else {
            res.status(200).send({data: dataMovies.Search, totalResults: dataMovies.totalResults, Response: dataMovies.Response})
        }
    } catch (e) {
        console.log(e)
        res.status(500).send({
            error: {
                code: 500,
                message: e.message
            }
        })
    }
}

module.exports = {
    getMoviesBySearch: getMoviesBySearch
}