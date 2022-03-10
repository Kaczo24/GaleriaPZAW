let mysql = require('sequelize');




exports.query = (cb, id) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("SELECT tags.Name AS 'x' FROM `tags`, `tag-picture` WHERE tags.TagID = `tag-picture`.`TagID` AND `tag-picture`.`PictureID` = " + id, (error, result) => {
            cb(result.map(x => x.x));
        })
    })

}

exports.create = (cb, tags, id) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        for(let tag of tags) {
            con.query("SELECT `TagID` FROM `tags` WHERE `Name` = " + tag, (error, result) => {
                if(!result.length)
                    con.query("INSERT INTO `tags`(`TagID`, `Name`) VALUES (null,'"+tag+"')", (error, output) => {
                        con.query("INSERT INTO `tags`(`TagID`, `Name`) VALUES (null,'"+tag+"')", (error, output) => {
                        
                            cb(result);
                        })
                        cb(result);
                    })
            })
        }
    })

}

exports.update = (cb, name, date, id) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("UPDATE `albums` SET `Name`='"+name+"', `CreationDate`='"+new Date(date).toISOString().substr(0,10)+"' WHERE `AlbumID` = " + id, (error, result) => {
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
        con.query("DELETE FROM `tag-picture` WHERE `PictureID` = " + id, (error, result) => {
            cb(result);
        })
    })

}

