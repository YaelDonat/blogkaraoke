let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser');

// mongoose instance connection url 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Anojan10:Anojan123.@cluster0.hmh9g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let routes = require('./api/routes/PostRoutes'); //importing route
routes(app);//register route

app.listen(port);
console.log("Api is listen on port : " + +port);
