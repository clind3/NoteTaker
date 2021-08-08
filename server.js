/*
    INITIALIZE SERVER
*/

//import express and path modules
const express = require('express');
const path = require('path');

//set up express to handle data and create PORT for server
const app = express();
const PORT = process.env.PORT || 3000;

//incorporate middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./public"));

//call routes
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

//default route for invalid requests
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

//start server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));