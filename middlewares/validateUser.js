const validateUser = (req, res, next) => {
    const data = req.body;
    console.log(data);
    if (Object.keys(data).length === 0) {
        res.status(400).json({ message: "missing user data" });
    } else if (!data.name) {
        res.status(400).json({ message: "missing required name field" });
    } else {
        next();
    }
}

module.exports = validateUser;