
const router = require('express').Router();
const { Direction } = require('../../models');
// const withAuth =  require('../../utils/auth')

router.post('/', 
//withAuth, 
async (req, res) => {
    try {
      const newDirection = await Direction.create({
        recipeDirection: req.body.recipeDirection,
        recipe_id: req.body.recipe_id
      });
      res.status(200).json(newDirection);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try { 
      const directionData = await Direction.findAll();
      res.status(200).json(directionData)
    } catch(err) {
      res.status(500).json(err)
    }
  });

  module.exports = router