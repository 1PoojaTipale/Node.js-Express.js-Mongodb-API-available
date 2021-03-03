const express = require('express')

const router = express.Router();

const {createCategory} = require("../controller/category");
const {getAllCategory} = require("../controller/category");
const {getCategorybyId} = require("../controller/category");
const {removeCategory} = require("../controller/category");

router.param("categoryId",getCategorybyId);

router.post("/category/create/", createCategory);
router.get("/category/getallcategories/", getAllCategory);
router.post("/removeCategory", getAllCategory);

router.delete("/category/:categoryId",removeCategory);
// router.param("productId:getCategoryId",removeCategory);



module.exports = router;