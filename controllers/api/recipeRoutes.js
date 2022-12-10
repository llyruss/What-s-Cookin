const router = require('express').Router();
const { Recipe, User, Direction, Ingredient } = require('../../models');
const withAuth =  require('../../utils/auth')

  router.get("/", async (req, res) => {
    try {
      const recipeData = await Recipe.findAll({
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
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', withAuth, async (req, res) => {
    try {
      const newRecipe = await Recipe.create({
        recipeName: req.body.recipeName,
      });
      res.status(200).json(newRecipe);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });





  
