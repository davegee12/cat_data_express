var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var all_cats = [
    {
        name: "Tigger",
        url: "/tigger",
        image: "/images/animal-1868911_960_720.jpg",
        food: "Honey",
        age: 6,
        sleeping: [
            "in a tree",
            "in the shade",
            "at Rabbit's house"
        ]
    },
    {
        name: "Shadow",
        url: "/shadow",
        image: "/images/cat-694730_960_720.jpg",
        food: "Wet food",
        age: 3,
        sleeping: [
            "on the bed",
            "on his kitty castle",
            "on the couch",
        ]
    },
    {
        name: "Mittens",
        url: "/mittens",
        image: "/images/cat-4226750_960_720.jpg",
        food: "Mice",
        age: 1,
        sleeping: [
            "in the grass",
            "on the couch",
            "under the bed"
        ]
    }
];

app.get('/', function (request, response) {
    response.render("index");
});

app.get('/cats', function (request, response) {
    response.render("cats", {all_cats: all_cats});
});

app.get('/tigger', function (request, response) {
    response.render("cat", {cat: all_cats[0]});
});

app.get('/shadow', function (request, response) {
    response.render("cat", {cat: all_cats[1]});
});

app.get('/mittens', function (request, response) {
    response.render("cat", {cat: all_cats[2]});
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});