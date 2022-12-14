const router = require('express').Router();
const { Ingredient } = require('../../models');
// const withAuth =  require('../../utils/auth')

router.post('/', 
//withAuth, 
async (req, res) => {
    try {
      const newIngredient = await Ingredient.create({
        ingredientName: req.body.ingredientName,
        recipe_id: req.body.recipe_id
      });
      res.status(200).json(newIngredient);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try { 
      const ingredientData = await Ingredient.findAll();
      res.status(200).json(ingredientData)
    } catch(err) {
      res.status(500).json(err)
    }
  });

  module.exports = router 

  