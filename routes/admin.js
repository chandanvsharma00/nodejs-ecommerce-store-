// imports
const router = require("express").Router();
const Category = require("../models/category");

/**
 * handles GET HTTP requests for adding a category
 */
router.get("/add-category", (req, res, next) => {
  res.render("admin/add-category", { message: req.flash("success") });
});

/**
 * Handles POST HTTP requests for adding a category
 */
router.post("/add-category", (req, res, next) => {
  // create new category instance
  const category = new Category();
  // retrieve the category name from the data sent over from the client
  category.name = req.body.name;
  // save the category name to mongo
  category.save((err) => {
    // handle errors
    if (err) return next(err);
    // no errors, return success message
    req.flash("success", "Successfully added a category");
    // redirect to the add category view
    return res.redirect("/add-category");
  });
});
// make route accessible to other files
module.exports = router;
