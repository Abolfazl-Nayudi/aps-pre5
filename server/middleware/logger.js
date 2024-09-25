const logger = (req, res, next) => {
  console.log(`request Method ${req.method} and request URL: ${req.url}`);
  next();
};

module.exports = logger;
