//Require/import dependencies
const express = require('express');


//Intialize express/define port
const app = express ();
const PORT = process.env.PORT || 3500;

//Access public file
app.use(express.static("public"));


//Sets up the express app to handle data parsing
app.use(express.urlencoded({extended: true }));
app.use(express.json());

//Router
//points server to a series of route files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listner
//starts the server
app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`);
});