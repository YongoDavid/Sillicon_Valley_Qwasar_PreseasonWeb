onst express = require('express');
const app = express();
const port = 8080;

const songs = [
    "My Way",
    "Fly Me to the Moon",
    "New York, New York",
    'Daybreak' , 
    'Dig Down Deep' ,
    'Do I Worry?' , 
    'Every Day of My Life' , 
    'Fairy Tale' ,
    'Farewell, Farewell to Love' , 
    'Five Minutes More' ,
    'A Foggy Day' , 
    'Follow Me' , 
    'For a While' , 
    'Free for All' , 
    'From This Day Forward' ,
    'April Played the Fiddle' , 
    'Ave Maria' ,
    'Can We Be Friends' ,
    'Carolina in the Morning' ,
    'Day by Day'
];

const wives = "Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx";


app.get('/' , (req,res)=>{
    const randomIndex = Math.floor(Math.random() * songs.length);
    res.send(songs[randomIndex]);
});

app.get('/birth_date' , (req,res) =>{
    res.send("December 12, 1915")
});

app.get('/birth_city' , (req,res)=>{
    res.send("Hoboken, New Jersey, U.S.")
});

app.get('/wives' , (req , res) => {
    res.send(wives.split(', ').join(', '));
});

app.get('/picture' , (req,res)=> {
    res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg')
});

app.get('/public' , (req,res)=> {
    res.send("Everybody can see this page")
});

app.get('/protected', (req, res) => {
    array = atob(req.headers.authorization.split(' ')[1]).split(':');

    username = array[0];
    password = array[1];

    if (username == 'admin' && password == 'admin') {
        res.send('Welcome, authenticated client');
    }

    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Not authorized.');
    
});

app.listen(port , () =>{
    console.log('Server started' + port);
});