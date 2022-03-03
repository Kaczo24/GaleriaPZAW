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

exports.create = (cb, name, creationDate) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("INSERT INTO `albums`(`AlbumID`, `Name`, `CreationDate`) VALUES (null, '"+name+"', '"+new Date(creationDate).toISOString().substr(0,10)+"'+)", (error, result) => {
            cb(result);
        })
    })

}

exports.update = (cb, name, id) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("UPDATE `albums` SET `Name`='"+name+"' WHERE `AlbumID` = " + id, (error, result) => {
            cb(result);
        })
    })

}

exports.delete = (cb, id) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("DELETE FROM `albums` WHERE `AlbumID` = " + id, (error, result) => {
            cb(result);
        })
    })

}

