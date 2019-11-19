const express = require("express");
const app = express();

const products = require('./routes/products');
const vehicles = require('./routes/vehicles');
const contacts = require('./routes/contacts');
const comments = require('./routes/comments');


const bodyParser = require("body-parser");
const port = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));


app.use(products);
app.use(vehicles);
app.use(contacts);
app.use(comments);

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});
