const sql = require("mssql");

const config = {
    user: "medlink_user",
    password: "Medlink@123",
    server: "DESKTOP-37B50BT\\SQLEXPRESS",
    database: "MedLinkDB",
    options: {
        trustServerCertificate: true,
        encrypt: false
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log("✅ Connected to SQL Server (MedLinkDB)");
        return pool;
    })
    .catch(err => {
        console.log("❌ DB Connection Failed:", err);
    });

module.exports = {
    sql,
    poolPromise
};