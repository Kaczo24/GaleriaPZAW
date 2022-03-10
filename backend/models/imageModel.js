let mysql = require('mysql');

exports.query = (cb, query = "1", limit, page = 0) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("SELECT * FROM `pictures` WHERE" + query + limit?` LIMIT ${limit} OFSET ${limit * page}`:"", (error, result) => {
            cb(result);
        })
    })

}

exports.create = (cb, name, creationDate, albumId, resolution, size, extension, cameraInfo) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("INSERT INTO `pictures`(`PictureID`, `Name`, `CreationDate`, `AlbumID`, `Resolution`, `Size`, `Extention`, `CameraInfo`) VALUES ('','"+ name +"','"+ new Date(creationDate).toISOString().substr(0,10) +"',"+ albumId +",'"+ resolution +"',"+ size +",'"+ extension +"','" + cameraInfo + "')", (error, result) => {
            cb(result);
        })
    })

}

exports.update = (cb, name, creationDate, albumId, resolution, size, extension, cameraInfo) => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "pzaw"
    });

    con.connect((err) => {
        con.query("UPDATE `pictures` SET `Name`='" + name + "',`CreationDate`='"+ new Date(creationDate).toISOString().substr(0,10) +"',`AlbumID`="+ albumId +",`Resolution`='"+ resolution +"',`Size`="+ size +",`Extention`='"+ extension +"',`CameraInfo`='" + cameraInfo + "' WHERE `PictureID` =" + id, (error, result) => {
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
        con.query("DELETE FROM `pictures` WHERE `PictureID` = " + id, (error, result) => {
            cb(result);
        })
    })

}

