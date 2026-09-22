const { rateLimit, ipKeyGenerator } = require("express-rate-limit");

const reportLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,

  message: {
    success: false,
    message: "Too many reports from this account, please try again after an hour.",
  },

  standardHeaders: true,
  legacyHeaders: false,

  keyGenerator: (req) => {
    return req.user
      ? req.user._id.toString()
      : ipKeyGenerator(req);
  },
});

module.exports = reportLimiter;
