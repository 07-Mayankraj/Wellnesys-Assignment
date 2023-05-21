const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(), // Add a timestamp to the log message
        winston.format.json() // Use JSON format for the log message
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logfile.log' })
    ]
});

// Middleware function to log API requests
const logRequest = (req, res, next) => {
    const { method, originalUrl, ip } = req;
    logger.info(`[${method}] ${originalUrl} - IP: ${ip}`);
    next();
};

module.exports = {logRequest};