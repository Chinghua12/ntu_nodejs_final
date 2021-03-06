let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function (req, res) {
  res.send(
    'Chinghua\'s home page' + '<br>' +
    '<a href="/user/Chinghua/about"> about </a>' + '<br>' +
    '<a href="/user/Chinghua/classA.html"> classA </a>'
  );
});

// define the about route
router.get('/about', function (req, res) {
  res.send(
    '<h1> About Chinghua </h1>' +
    '\n <img src="https://hexschool.github.io/webLayoutTraining1st/week1/photo.png" height="60%">'
  );
});

module.exports = router;
