const User = require("../models/user.model");
const { v4: uuidv4 } = require ("uuid");


const getAllUsers = (req, res) => {
    res.status(200).json({
        massage: "all users",
    });
};

const getOneUsers = (req, res) => {
    res.status(200).json({
        massage: "Get One user",
    });
};

const createUser = async(req, res) => {
   try{
       const newUser = new User({
         id: uuidv4(),
         name: req.body.name,
         age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
   }
   catch ( error) {
    res.status(500).send (error.massage)
   }
};

const updateUser = (req, res) => {
    res.status(200).json({
        massage: "User is Updated",
    });
};

const deleteUser = (req, res) => {
    res.status(200).json({
        massage: "User is deleted",
    });
};


module.exports= {getAllUsers, getOneUsers, createUser, updateUser, deleteUser};