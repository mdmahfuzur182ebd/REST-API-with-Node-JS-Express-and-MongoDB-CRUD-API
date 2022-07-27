const express = require('express');
const router = express.Router();

const { getAllUsers, createUser, getOneUsers, deleteUser, updateUser } = require('../controllers/user.controller');


router.get("/", getAllUsers);
router.get("/:id", getOneUsers);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
router.post("/", createUser);


module.exports = router;