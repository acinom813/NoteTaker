//Import the 'fs' module to enable interaction with the file system 
const fs = require("fs");

//API Routing, API gets request
module.exports = (app) => {
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteList);
    });
//API Post request that handles when a user submits data to the server
app.post('/api/notes', (req, res) => {
    //get Id of last not if it exits
    let lastId;

    if(noteList.length) {
        lastId = Math.max(...lastId(noteList.map(note =>note.id)));
    } else {
        lastId = 0;
    }
    const id = lastId + 1;
 //Note id and text/input of array pushed into req.body
    noteList.push({ id, ...req.body});
    res.json(noteList.slice(-1));
});

//Deletes api/notes/:id
    app.delete('/api/notes/:id', (req,res) {
    let findNote = noteList.find (({id})  => id ===JSON.parse(req.params.id));
   //Object matching the index of the noteID will be deleted
   noteList.splice(noteList.indexOf(findNote), 1);
   res.end("Note was deleted.");
});

    
};