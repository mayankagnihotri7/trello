const jwt = require("jsonwebtoken");

exports.generateToken = async (user) => {
  try {
    const token = await jwt.sign({ userId: user.id }, "thisisasecret");
    return token;
  } catch (error) {
    return error;
  }
};

exports.verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      const payload = await jwt.verify(token, "thisisasecret");
      const user = {
        userId: payload.userId,
        token,
      };
      req.user = user;
      next();
    }
  } catch (error) {
    return next(error);
  }
};
