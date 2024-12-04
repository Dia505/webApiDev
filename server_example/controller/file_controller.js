const File = require("../models/files");

const uploadFile = async(req, res) => {
    //sending the file's name to database
    const file = new File({file: req.file.originalname});
    await files.save();
    res.json(req, file);
}

module.exports = {
    uploadFile
}