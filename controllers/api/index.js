const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const directionRoutes = require('./directionRoutes');

router.use('/users', userRoutes);
// router.use('/recipes', recipeRoutes);
// router.use('/ingredients', ingredientRoutes);
// router.use('/directions', directionRoutes);

module.exports = router;