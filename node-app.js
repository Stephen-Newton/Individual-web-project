 const express = require('express'); 
const app = express();
const port = 3000; //runs from port number 3000

//uses theies methods to display outputs
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page1.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data
    // Add validation logic here
    res.send(`Username is $snewtonj`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
