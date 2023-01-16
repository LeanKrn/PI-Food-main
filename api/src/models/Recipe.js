const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    readyInMinutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pricePerServing: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sourceName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    healthScore: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cuisines: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diets: {
      type: DataTypes.ENUM('Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian',"Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30", 'Other'),
      defaultValue: 'Other',
    },
    analyzedInstructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
