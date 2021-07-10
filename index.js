const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000

app.use(bodyParser.json());

//Importing routes
const studentsRoute = require('./routes/students.js');
const equipmentsRoute = require('./routes/equipments.js');
const datesRoute = require('./routes/dates.js');
const timesRoute = require('./routes/times.js');
const logbooksRoute = require('./routes/logbooks.js');

app.use('/students' , studentsRoute);
app.use('/equipments' , equipmentsRoute);
app.use('/dates' , datesRoute);
app.use('/times' , timesRoute);
app.use('/logbooks' , logbooksRoute);

//Initiating basic functions
app.get('/', (req, res) => {
    res.send('Welcome to UTeM Sport Centre')
});



//Connection to mongodb
mongoose.connect( 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.7sjg7.mongodb.net/SportCentreDatabase',
             { useNewUrlParser: true },() =>
              console.log('Connected to Mongodb')
);

app.listen(PORT, () => 
      console.log('Listening on Port')
);
