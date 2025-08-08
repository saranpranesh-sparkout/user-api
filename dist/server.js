"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _db = _interopRequireDefault(require("./config/db.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
(0, _db["default"])();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.send("API is running...");
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(" Server running on http://localhost:".concat(PORT));
});