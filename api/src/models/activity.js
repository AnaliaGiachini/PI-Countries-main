// Require: DataTypes to create the models
const { DataTypes } = require('sequelize')

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {

  // Defines: the model (model name, attributes )
  sequelize.define('activity', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull: false,
    },

    duration: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    season: {
      type: DataTypes.ENUM('Summer', 'Fall', 'Winter', 'Spring'),
      allowNull: false,
    },
  },

    // Invalidates: Date and time fields
    { timestamps: false }
  )
}
