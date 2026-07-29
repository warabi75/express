var express = require('express');
var router = express.Router();

router.get('/data', function(req,res,next){
    res.json({
        message: 'APIの動作確認に成功しました!',
        status: 200,
        users: [
            { id: 1, name: 'Taro' },
            { id: 2, name: 'Hanako' }
        ]
    });
});

module.exports = router;