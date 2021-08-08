//Load data
const fs = require('fs');
const path = require('path');
const noteJSON = require('../db/db.json');
const { v4: uuidv4 } = require("uuid");
let noteData = [];

//API ROUTING
module.exports = (app) => {
    //Getting json note data
    app.get('/api/notes', (req, res) => res.json(noteData));

    //Saving notes
    app.post('/api/notes', (req, res) => {
        let note = req.body;
        note.id = uuidv4();
        // console.log(note);
        noteData.push(note);
        writeNotes(noteData)
        res.send(noteData);
    });

    //deleting identified note
    app.delete('/api/notes/:id', (req,res) => {
        const chosenId = req.params.id;
        for(let i = 0; i < noteData.length; i++) {
            if(noteData[i].id === chosenId ) {
                noteData.splice(i, 1);
            }
        };
        writeNotes(noteData);
        res.end();
    });

    function writeNotes(noteData) {
        fs.writeFile(
            path.join(__dirname, '../db/db.JSON'),
            JSON.stringify(noteData),
            (err) => (err ? console.err(err) : console.log('Note Updated!'))
        );
    }
}