//Custom middleware logger: logs method, url, and timestamp of each request
function customLogger(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
    next(); // Call the next middleware or route handler
}

module.exports = customLogger;