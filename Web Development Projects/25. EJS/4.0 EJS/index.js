import express from 'express';
const app = express();
const port = 3000;

const date = new Date();
const currentDay = date.getDay();
let dayType;
let advice;

if (currentDay === 0 || currentDay === 6) {
    dayType = 'Weekend';
    advice = 'have fun';
} else {
    dayType = 'a Weekday';
    advice = 'work hard';
}

app.get('/', (req, res) => {
    res.render('index.ejs', { dayType, advice });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
