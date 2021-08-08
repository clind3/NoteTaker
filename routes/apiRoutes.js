//Load data and import necessary modules
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid");

//API ROUTING
module.exports = (app) => {
    //retrieve data from db.json file
    let noteData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    console.log('noteData');

    //Getting json note data
    app.get('/api/notes', (req, res) => res.json(noteData));

    //Saving notes
    app.post('/api/notes', (req, res) => {
        //access client new note data
        let note = req.body;

        //create unique id
        note.id = uuidv4();
        // console.log(note);

        noteData.push(note);
        //add note data to db.json file
        writeNotes(noteData);
        res.json(noteData);
    });

    //deleting identified note
    app.delete('/api/notes/:id', (req, res) => {
        const chosenId = req.params.id;
        for (let i = 0; i < noteData.length; i++) {
            if (noteData[i].id === chosenId) {
                noteData.splice(i, 1);
            }
        };
        //update db.json file
        writeNotes(noteData);
        res.end();
    });

    //function to update db.json file
    function writeNotes(noteData) {
        fs.writeFileSync('./db/db.json',
            JSON.stringify(noteData),
            (err) => (err ? console.err(err) : console.log('Note Updated!'))
        );
    }
}