const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

//set up express to handle data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//Routes
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

//start server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));