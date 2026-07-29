var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET random dog image */
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    // response.data は { message: "URL...", status: "success" } の形
    res.json(response.data); 
  } catch (error) {
    console.error("Dog API Error:", error.message);
    res.status(500).json({ error: "Dog APIの取得に失敗しました" });
  }
});

module.exports = router;