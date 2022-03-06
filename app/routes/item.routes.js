module.exports = app => {
  const Items = require("../controllers/item.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", Items.create);

  // Retrieve all Tutorials
  router.get("/", Items.findAll);

  // Retrieve all published Tutorials
  router.get("/flagged", Items.findAllFlagged);

  // Retrieve a single Tutorial with id
  router.get("/:id", Items.findOne);

  // Update a Tutorial with id
  router.put("/:id", Items.update);

  // Delete a Tutorial with id
  router.delete("/:id", Items.delete);

  // Delete all Tutorials
  router.delete("/", Items.deleteAll);

  app.use('/api/Items', router);
};


//This is my backend running on a seperate localhost server.