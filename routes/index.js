const bookRoutes = require ("./books.js")
const router = require("express").Router();

router.use('/api/books', bookRoutes);


module.exports = router;