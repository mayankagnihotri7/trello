const express = require("express");
const User = require("../models/user");
const auth = require("../middlewares/auth");
const router = express.Router();

//  create user/register.
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body.user);

    const token = await auth.generateToken(user);

    res.json({ email: user.email, username: user.name, token });
  } catch (error) {
    return next(error);
  }
});

router.get("/", auth.verifyToken, async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });

    if (!user) return res.json({ message: "User not found!" });

    res.json({ user });
  } catch (error) {
    return next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body.user;

  if (!email || !password) {
    res.json({ success: false, message: "Username/password required." });
  }

  try {
    let user = await User.findOne({ email });

    let token = await auth.generateToken(user);

    if (!(await user.verifyPassword(password))) {
      return res.json({ message: "Invalid Password" });
    }

    res.json({ email: user.email, username: user.name, token });
  } catch (error) {
    return next(error);
  }
});

router.put("/:email", auth.verifyToken, async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      req.body.user,
      { new: true }
    );
    res.json({ user });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
