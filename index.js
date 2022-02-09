const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', "ejs");
app.set('views', "./views");

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    let posts = [
        {
            title: 'Man must explore, and this is exploration at its greatest',
            subTitle: 'Problems look mighty small from 150 miles up',
            author: 'Start Bootstrap',
            postDate: 'on September 24, 2021'
        },
        {
            title: 'Man must explore, and this is exploration at its greatest',
            subTitle: 'Problems look mighty small from 150 miles up',
            author: 'Start Bootstrap',
            postDate: 'on September 24, 2021'
        },
        {
            title: 'Man must explore, and this is exploration at its greatest',
            subTitle: 'Problems look mighty small from 150 miles up',
            author: 'Start Bootstrap',
            postDate: 'on September 24, 2021'
        }
    ]

    res.render("index", {posts: posts});
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/post', (req, res) => {
    res.render("post");
});

// Use static site
//app.use(express.static('./vu'));
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});