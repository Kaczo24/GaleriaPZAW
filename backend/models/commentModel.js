let mysql = require('mysql');

exports.query = (cb, query = "1") => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("SELECT * FROM `comments` WHERE" + query, (error, result) => {
            cb(result);
        })
    })

}

exports.create = (cb, author, content, date, pictureID) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("INSERT INTO `comments`(`CommentID`, `Author`, `Content`, `CreateDate`, `PictureID`) VALUES (null,'"+author+"','"+content+"','"+new Date(date).toISOString().substr(0,10)+"',"+pictureID+")", (error, result) => {
            cb(result);
        })
    })

}

exports.update = (cb, author, content, date, pictureId, id) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("UPDATE `comments` SET `Author`='"+author+"',`Content`='"+content+"',`CreateDate`='"+new Date(date).toISOString().substr(0,10)+"',`PictureID`='"+pictureId+"' WHERE `CommentID` = " + id, (error, result) => {
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
        con.query("DELETE FROM `comments` WHERE `CommentID` = " + id, (error, result) => {
            cb(result);
        })
    })

}

