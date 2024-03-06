import express from 'express';

const app = express();

// enable JSON body parser
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/testing', (req, res) => {
    res.send('Hiya');
});

app.listen(3000, () => console.log('🚀 Server ready at: http://localhost:3000'));

module.exports = app;