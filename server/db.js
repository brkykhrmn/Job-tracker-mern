const { Pool } = require('pg');
const dotenv = require('dotenv');
const { connect } = require('node:http2');

dotenv.config();

const pool = new Pool({
    host : process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DB,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
})

pool.on('connect', () => {
    console.log('DB connected')
})

module.exports = pool;