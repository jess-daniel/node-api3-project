function logger(req, res, next) {
    console.log(`method: ${req.method}, url: ${req.url}, timestamp: ${Date.now()}`);
    next();
}

module.exports = logger;