const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.get('/home', (req, res) => {
    let datum = {'id': 10, 'name': 'Jane Repollo'};
    let data = JSON.stringify(datum);
    res.end(data);
})

app.listen(process.env.PORT || 8000)
