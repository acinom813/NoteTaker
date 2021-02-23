//Require/import dependencies
const express = require('express');


//Intialize express/define port
const app = express ();
const PORT = process.env.PORT || 3500;

//Access public file
app.use(express.static(_dirname + '/public'));
app.use(express.static('./'));

//Sets up the express app to handle data parsing
app.use(express.urlencoded({extended: true }));
app.use(express.json());

//Router
//points server to a series of route files.
require("./apiRoutes")(app);
require(".htmlRoutes")(app);

//Listner
//starts the server
app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`);
});