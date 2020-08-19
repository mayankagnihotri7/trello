var express = require("express");
const userRouter = require("./users");
// const boardRouter = require("./boards");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ success: true, message: "Welcome to Node APIs" });
});

router.use("/users", userRouter);
// router.use("/boards", boardRouter);

module.exports = router;
