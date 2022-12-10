
const router = require('express').Router();
const { Direction } = require('../../models');
const withAuth =  require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
      const newDirection = await Direction.bulkCreate({
        recipeDirection: req.body.recipeDirection,
      });
      res.status(200).json(newDirection);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

  module.exports = router