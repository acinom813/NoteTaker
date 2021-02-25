//Include the  path package to get the correct file path on our HTML
const path = require("path");

//Routing 
module.exports = (app) => {
//HTML GET Requests
//Code handlers when users "visit" a page.
//In each case the user is shown a different HTML page (notes or index)
app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

};