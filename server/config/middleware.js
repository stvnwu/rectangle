var bodyParser = require('body-parser');

module.exports = function (app, express) {
  var userRouter = express.Router();
  var cardRouter = express.Router();
  var connectionRouter = express.Router();

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  // accept CORS
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.use('/users', userRouter);
  require('../users/userRoute.js')(userRouter);

  app.use('/cards', cardRouter);
  require('../cards/cardRoute.js')(cardRouter);

  app.use('/connections', connectionRouter);
  require('../connections/connectionRoute.js')(connectionRouter);
};
