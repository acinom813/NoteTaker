//Import the 'fs' module to enable interaction with the file system
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
//API Routing, API gets request
let noteList = require("../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
      res.json(noteList);
  });
  //API Post request that handles when a user submits data to the server
  app.post("/api/notes", (req, res) => {
    //get Id of last not if it exits

    req.body.id = uuidv4();
    console.log(req.body);
    //Note id and text/input of array pushed into req.body
    noteList.push(req.body);

    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));

    res.json(noteList);
  });

  //Deletes api/notes/:id
  app.delete("/api/notes/:id", (req, res) => {
    console.log(req.params.id);
    let findNote = noteList.filter(({ id }) => id != req.params.id);
    //Object matching the index of the noteID will be deleted
    noteList = findNote;

    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));

    res.json(noteList);
  });
};
