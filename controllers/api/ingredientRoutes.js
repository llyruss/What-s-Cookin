const router = require('express').Router();
const { Ingredient } = require('../../models');
const withAuth =  require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
      const newIngredient = await Ingredient.bulkCreate({
        ingredientName: req.body.ingredientName,
      });
      res.status(200).json(newIngredient);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

  module.exports = router 