let mysql = require('mysql');

exports.query = (cb, query = "1", limit, page = 0) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("SELECT * FROM `replies` WHERE" + query + limit?` LIMIT ${limit} OFSET ${limit * page}`:"", (error, result) => {
            cb(result);
        })
    })

}

exports.create = (cb, author, content, creationDate, CommentID) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("INSERT INTO `replies`(`ReplyID`, `Author`, `Content`, `CreateDate`, `CommentID`) VALUES (null,'"+author+"','"+content+"','"+new Date(creationDate).toISOString().substr(0,10)+"',"+CommentID+")", (error, result) => {
            cb(result);
        })
    })

}

exports.update = (cb, author, content, date, commentid, id) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("UPDATE `replies` SET `Author`='"+author+"',`Content`='"+content+"',`CreateDate`='"+new Date(date).toISOString().substr(0,10)+"',`CommentID`='"+commentid+"' WHERE `ReplyID` = " + id, (error, result) => {
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
        con.query("DELETE FROM `replies` WHERE `ReplyID` = " + id, (error, result) => {
            cb(result);
        })
    })

}

