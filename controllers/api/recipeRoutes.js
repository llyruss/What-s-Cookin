const router = require('express').Router();
const { Recipe, User, Direction, Ingredient } = require('../../models');
// const withAuth =  require('../../utils/auth')

  router.get("/", async (req, res) => {
    try {
      const recipeData = await Recipe.findAll({
        include: [
            { model: User,
                attributes:['userName']
            },
        ],
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
  
    try {
      const oneRecipe = await Recipe.findByPk(req.params.id, {
        include: [
          { model: User,
              attributes:['userName']
          },
          { model: Direction,
              attributes:['recipeDirection']
          },
          { model: Ingredient,
              attributes:['ingredientName']
          },
      ],
      })
      if (!oneRecipe) {
        res.status(404).json({message: "No recipe found with that id"});
        return
      }
      res.status(200).json(oneRecipe);
    } catch(err) {
      res.status(400).json(err)
    }
  });


  router.post('/', 
  //withAuth, 
  async (req, res) => {
    try {
      const newRecipe = await Recipe.create({
        recipeName: req.body.recipeName,
        has_nuts: req.body.has_nuts,
        gluten_free: req.body.gluten_free,
        vegan: req.body.vegan
      });
      res.status(200).json(newRecipe);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });


  module.exports = router


  
