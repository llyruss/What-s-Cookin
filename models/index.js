// import models
const Recipe = require('./Recipe');
const User = require('./User');
const Tag = require('./Tag');
const Ingredient = require('./Ingredient');
const Direction = require('./Direction');

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
  });

Recipe.belongsToMany(Tag, {
    // Define the third table needed to store the foreign keys
    through: RecipeTag,
    foreignKey: "recipe_id",
  });

Tag.belongsToMany(Recipe,{
    through: RecipeTag,
    foreignKey: "tag_id"
  });

Recipe.hasMany(Ingredient, {
    foreignKey: "recipe_id",
    onDelete: 'CASCADE'
});

Recipe.hasMany(Direction, {
    foreignKey: "recipe_id",
    onDelete: 'CASCADE'
});

Direction.belongsTo(Recipe, {
    foreignKey: "recipe_id",
});

Ingredient.belongsTo(Recipe, {
    foreignKey: "recipe_id",
});


module.exports = {
  Recipe,
  User,
  Tag,
  Ingredient,
  Direction
};