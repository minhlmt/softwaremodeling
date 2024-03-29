const mysql = require('mysql');
const util = require('util');

// const pool=mysql.createPool({
//     connectionLimit:50,
//     host: 'remotemysql.com',
//     port:3306,
//     user:'0m4tX28OBZ',
//     password:'6mfqhhEjsZ',
//     database:'0m4tX28OBZ'
// });

const pool = mysql.createPool({
    connectionLimit: 50,
    host: 'remotemysql.com',
    port: 3306,
    user: 'TuKlfJhwUP',
    password: '0nWZ26bV1t',
    database: 'TuKlfJhwUP'
});

const mysql_query = util.promisify(pool.query).bind(pool);
module.exports = {
    load: sql => mysql_query(sql),
    add: (tableName, entity) => mysql_query(`insert into ${tableName} set ?`, entity),
    del: (tableName, condition) => mysql_query(`delete from ${tableName} where ?`, condition),
    patch: (tableName, entity, condition) => mysql_query(`update ${tableName} set ? where ?`, [entity, condition]),
};