var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const dataList = [
    { id: '001', name: 'Item_A', url: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg', status: 'Active' },
    { id: '002', name: 'Item_B', url: 'https://images.dog.ceo/breeds/shiba/shiba-1.jpg', status: 'Active' },
    { id: '003', name: 'Item_C', url: 'https://images.dog.ceo/breeds/beagle/n02088364_12128.jpg', status: '保留中' },
    { id: '004', name: 'Item_D', url: 'https://images.dog.ceo/breeds/husky/n02110185_1469.jpg', status: 'アクティブ' },
    { id: '005', name: 'Item_E', url: 'https://images.dog.ceo/breeds/pug/n02110958_12932.jpg', status: '非アクティブ' }
];

  res.json(dataList);
});

module.exports = router;