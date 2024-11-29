const express = require("express");
const router = express.Router();
const {findAll, save, findById, deleteById, update} = require("../controller/user_controller");

//endpoints
router.get("/", findAll);
router.post("/", save);
router.get("/:id", findById);
router.delete("/:id", deleteById);
router.put("/:id", update)

module.exports = router;