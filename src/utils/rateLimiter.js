const {
  RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX_REQUESTS
} = require("../constants/rateLimit.constants");

let requestCount = 0;

let windowStartTime = Date.now();

function rateLimiter(req, res, next) {

  const now = Date.now();

  if (
    now - windowStartTime >
    RATE_LIMIT_WINDOW_MS
  ) {
    requestCount = 0;
    windowStartTime = now;
  }

  if (
    requestCount >=
    RATE_LIMIT_MAX_REQUESTS
  ) {
    return res.status(429).json({
      success: false,
      message:
        "Rate limit exceeded. Try again later."
    });
  }

  requestCount++;

  next();
}

module.exports = rateLimiter;