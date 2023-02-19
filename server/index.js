const express = require('express');
const cors = require('cors');
const routerApi = require('../routes');
const { logErrors, errorHanddler, boomErrorHanddler } = require('../middlewares/error.handdler');


const app = express();
const port = process.env.PORT || 3005;


app.use(express.json());

//WhiteList to configure cors
/* const whiteList = ['http://localhost:3000/'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No access'));
    }
  }
}
 */
//Cors
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server');
});

//Routes
routerApi(app);

//Errors MiddlerWares
app.use(logErrors);
app.use(errorHanddler);
app.use(boomErrorHanddler);


app.listen(port, () => {
  console.log('My port ' + port);
});
