const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage(
    {
        destination: function(req, res, cb) {
            cb(
                null,
                "C:/Users/dell/OneDrive/Desktop/web api/server_example/uploads"
            );
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    }
);
const upload = multer({storage})

router.post("/upload", upload.single("file"))

module.exports = router;