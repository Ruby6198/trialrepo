const Pool = require("pg").Pool

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5434,
    password: "Pro@1234",
    database: "clinic-db",
})

module.exports = pool;
