var bodyParser = require('body-parser');

module.exports = function (app, express) {
  var userRouter = express.Router();
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use('/users', userRouter);
  require('../users/userRoutes.js')(userRouter);
};
