const express = require('express')

const router = express.Router();

const {createCategory} = require("../controller/category");
const {getAllCategory} = require("../controller/category");


router.post("/category/create/", createCategory);
router.get("/category/getallcategories/", getAllCategory);



module.exports = router;