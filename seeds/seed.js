const sequelize = require('../config/connection');
const {User, Recipe, Direction, Ingredient, Tag, RecipeTag} = require('../models');

const directionData = require('./directionData.json')
const userData = require('./userData.json')
const recipeData = require('./recipeData.json')
const ingredientData = require('./ingredientData.json')
const recipeTag = require('./recipeTag.json')

