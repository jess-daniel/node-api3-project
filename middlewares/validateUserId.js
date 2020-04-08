const Users = require("../users/userDb");

const validateUserId = (req, res, next) => {
    const { id } = req.params;
    Users.getById(id)
        .then(user => {
            if (!user) {
                res.status(400).json({ message: "The user with the specified ID does not exist." });
            } else {
                req.user = user;
                next();
            }
        })
        .catch(err => {
            res.status(500).json({ message: "server error", err });
        })
}

module.exports = validateUserId;