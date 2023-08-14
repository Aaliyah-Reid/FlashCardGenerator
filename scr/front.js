const express = require('express');
const multer = require("multer");
const cors = require("cors");
const app =express();
app.use(cors());



// for storing files
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"/uploads");
    },

    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage})

app.post("/upload", upload.none(), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.json({staus: "files uploaded"});
});

app.listen(5000,function()){
    console.log("Server is running on port 5000");
}
