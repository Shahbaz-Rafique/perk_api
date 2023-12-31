const multer = require("multer");

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/files/");
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

module.exports={storage}

