const validatePost = (req, res, next) => {
    const data = req.body;
    if (!data) {
        res.status(400).json({ message: "missing post data" });
    } else if (!data.text) {
        res.status(400).json({ message: "missing required text field" });
    } else {
        next();
    }
}

module.exports = validatePost;