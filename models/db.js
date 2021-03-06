const { Pool } = require("pg");

// set up PostgreSQL database
const connectionString = process.env.PG_CONNECTION_STRING;
const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});


pool.connect()
    .then(() => {
        console.log("✅ Successfully connect to PostgreSQL");
    })
    .catch((err) => {
        console.log("Connect to PostgreSQL failed: ", err);
    });

exports.getQuery = function (sqlQuery) {
    return new Promise((resolve, reject) => {
        pool.query(sqlQuery, (err, res) => {
            if (!err) resolve(res.rows);
            else reject(err);
        }) 
    })
}

    