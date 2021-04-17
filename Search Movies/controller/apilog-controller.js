const dbConn = require('../db/connection')
const axios = require('axios')

const getAllAPILogs = async (req, res) => {
    try {
        const data = await dbConn('logapicall')
        res.status(200).send({data})
    } catch (e) {
        console.log(e)
        res.status(500).send({message: 'Internal Server Error'})
    }
}

module.exports = {
    getAllAPILogs: getAllAPILogs
}