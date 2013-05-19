exports.defineModel = function(sequelize, DataTypes) {
  return sequelize.define(
    "Source", {
      device_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        }
      },
      latitude: {
        type: DataTypes.FLOAT,
        validate: {
          isFloat: true,
          min: -90,
          max: 90
        }
      },
      longitude: {
        type: DataTypes.FLOAT,
        validate: {
          isFloat: true,
          min: -180,
          max: 180
        }
      }
    },{
      // column naming customization
    });
};