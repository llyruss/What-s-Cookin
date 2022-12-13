const router = require("express").Router();
const { User, Recipe, Ingredient, Direction } = require("../models");
// const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("home", {
    logged_in: req.session.logged_in,
  });
});

router.get("/recipes", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["userName"],
        },
      ],
    });
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render("get-all-recipes", {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/recipes/:id", async (req, res) => {
//   try {
//     const recipeData = await Recipe.findByPk({
//       include: [
//         { model: User, attributes: ["userName"] },
//         { model: Direction, attributes: ["recipeDirection"] },
//         { model: Ingredient, attributes: ["ingredientName"] },
//       ],
//     });
//     const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
//     console.log(recipes);

//     res.render("recipe-details", {
//       recipes,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get("/recipes/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params["id"],
      {
        include: [
          { model: User, attributes: ["userName"] },
          { model: Direction, attributes: ["recipeDirection"] },
          { model: Ingredient, attributes: ["ingredientName"] },
        ],
      });
    console.log("recipeData", recipeData)
    // const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    res.render("recipe-details", {
      recipeData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/recipes");
    return;
  }
  res.render("login", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
