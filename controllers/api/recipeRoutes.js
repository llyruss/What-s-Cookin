const router = require('express').Router();
const { User, Recipe, Direction, Ingredient, Tag, RecipeTag } = require('../../models');
const withAuth =  require('../../utils/auth')

router.post("/", withAuth, async (req, res) => {
    try {
      const recipeData = await Recipe.create({
        user_id: req.session.user_id,
        recipeName: req.body.recipeName,
        ingredientName: req.body.ingredientName,
        blogger_name: req.body.blogger_name,
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

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
            { model: Tag,
                attributes:['tag_name']
            },
        ],
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
