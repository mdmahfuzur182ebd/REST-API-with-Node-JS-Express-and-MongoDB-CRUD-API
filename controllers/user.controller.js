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

const createUser = (req, res) => {
    res.status(201).json({
        massage: "Create user",
    });
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