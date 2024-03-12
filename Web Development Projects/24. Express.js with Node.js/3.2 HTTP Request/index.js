import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Me</h1><p>Phone: +35988888888</p>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Find Me</h1><p>Lives in Sofia</p>');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
