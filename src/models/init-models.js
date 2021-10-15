var DataTypes = require("sequelize").DataTypes;
var _sedanus = require("./sedanus");

function initModels(sequelize) {
  var sedanus = _sedanus(sequelize, DataTypes);


  return {
    sedanus,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
