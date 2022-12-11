
const {User, Recipe, Direction, Ingredient } = require('../models');


const directionData = require('./directionData.json')
const userData = require('./userData.json')
const recipeData = require('./recipeData.json')
const ingredientData = require('./ingredientData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

    await Recipe.bulkCreate(recipeData);
    await Direction.bulkCreate(directionData);
    await Ingredient.bulkCreate(ingredientData);
    
      process.exit(0);
};

seedDatabase();
