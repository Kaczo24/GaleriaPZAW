let mysql = require('mysql');

exports.query = (cb, query = "1") => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("SELECT * FROM `albums` WHERE" + query, (error, result) => {
            cb(result);
        })
    })

}