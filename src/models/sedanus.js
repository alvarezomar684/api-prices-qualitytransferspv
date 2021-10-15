const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return sedanus.init(sequelize, DataTypes);
}

class sedanus extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    destinations: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prices: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sedanus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sedanus_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return sedanus;
  }
}
