const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('home');
});

module.exports = router;

// router.get('/', async (req, res) => {
//     try {
//       // Get all projects and JOIN with user data
      
      
  
//       // Serialize data so the template can read it
  
//       // Pass serialized data and session flag into template
//       res.render('get-all-recipes', { 
        
//       //   logged_in: req.session.logged_in 
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   module.exports = router;
