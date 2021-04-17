const dbConn = require('../db/connection')
const axios = require('axios')

const APIKEY = 'faf7e5bb'
const URL = 'https://www.omdbapi.com'

const defaultParams = ['type', 'y', 'plot', 'v', 'callback', 'apikey']

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
    // Collect Query
    const query = req.query !== undefined ? req.query : {}
    
    const acceptedParams = [...defaultParams, 's', 'page']

    // Get API Key & Filter Params
    let apikey
    if (Object.keys(query).length) {
        apikey = query.apikey
        const notAcceptableParams = Object.keys(query).filter((d) => !acceptedParams.includes(d))
        if (notAcceptableParams.length) {
            return res.status(400).send({
                error: {
                    code: 400,
                    message: "['" + notAcceptableParams.join("', '") + "'] => Params are not recognized for this endpoint."
                }
            })
        }
    }

    try {
        // Try to hit API
        const data = await getAPI(URL, apikey, query)
        let dataMovies = data.data

        // Check if Err
        if (dataMovies.err) {
            res.status(200).send({err: dataMovies.err})
        } else {
            // Response of success
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

const getMoviesDetail = async (req, res) => {
     // Collect Query
     const query = req.query !== undefined ? req.query : {}
    
     const acceptedParams = [...defaultParams, 't', 'i']
 
     // Get API Key & Filter Params
     let apikey
     if (Object.keys(query).length) {
         apikey = query.apikey
         const notAcceptableParams = Object.keys(query).filter((d) => !acceptedParams.includes(d))
         if (notAcceptableParams.length) {
             return res.status(400).send({
                 error: {
                     code: 400,
                     message: "['" + notAcceptableParams.join("', '") + "'] => Params are not recognized for this endpoint."
                 }
             })
         }
     }
 
     try {
         // Try to hit API
         const data = await getAPI(URL, apikey, query)
         let dataMovies = data.data
 
         // Check if Err
         if (dataMovies.err) {
             res.status(200).send({err: dataMovies.err})
         } else {
             // Response of success
             res.status(200).send({data: dataMovies})
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
    getMoviesBySearch: getMoviesBySearch,
    getMoviesDetail: getMoviesDetail
}