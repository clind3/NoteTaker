const path = require('path');

module.exports = (app) => {
    //HTML GET ROUTES
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

    //req to see notes html
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

}