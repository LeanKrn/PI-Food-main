const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    },
    analyzedInstructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },{timestamps:false});
};
