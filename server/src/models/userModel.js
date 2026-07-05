const { poolPromise } = require("../config/db");

const createUser = async (full_name, email, hashedPassword) => {
    const pool = await poolPromise;

    const result = await pool.request()
        .input("full_name", full_name)
        .input("email", email)
        .input("password", hashedPassword)
        .query(`
            INSERT INTO Users (full_name, email, password)
            VALUES (@full_name, @email, @password);
        `);

    return result;
};

const findUserByEmail = async (email) => {
    const pool = await poolPromise;

    const result = await pool.request()
        .input("email", email)
        .query(`
            SELECT * FROM Users WHERE email = @email
        `);

    return result.recordset[0];
};

const getAllUsers = async () => {
    const pool = await poolPromise;

    const result = await pool.request().query("SELECT * FROM Users");
    return result.recordset;
};

module.exports = {
    createUser,
    findUserByEmail,
    getAllUsers
};