const router = require('express').Router();
const { User, Recipe, Ingredient, Direction } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('home');
});

router.get('/recipes', async (req, res) => {
  try { 
    const recipeData = await Recipe.findAll({
        include: [
          {
              model: User,
              attributes: ["name"]
          },
      ],
  });
  const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  res.render("get-all-recipes", { 
    recipes,
})
} catch(err) {
  console.log(err);
  res.status(500).json(err)
}
});

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/recipes');
    return;
  }
  res.render('login', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;

