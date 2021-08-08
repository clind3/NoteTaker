const path = require('path');

module.exports = (app) => {
    //HTML GET ROUTES
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

    // app.get('*', (req, res) => res.send(`404: No Path File Found ${req.path}`));
}