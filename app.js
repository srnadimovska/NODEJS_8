const express = require ('express');
const functions = require ('./controller/functions');

const app = express();

app.set('view engine' , 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const indexData = {
    poraka: 'WELCOME TO MY BOOKSTORE',
    ime: 'Srna',
    prezime: 'Dimovska',
};
app.get('/index', (req , res) => {
    res.render('index', indexData);
});

app.get('/books', functions.getBook);
app.get('/newbooks', functions.getTableBook);
app.post('/newbooks', functions.postNewBook);



const port = 9000;
app.listen(port, (err) => {
    if(err) return console.log(err.message)
        console.log(`Server started on port ${port} successfully!`);
});
