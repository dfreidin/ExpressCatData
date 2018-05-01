var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.get("/cats", function(request, response){
    response.render("cats");
});
app.get("/cats/1", function(request, response){
    var cat_info = {
        image_file: "/images/adorable-animal-animal-world-209037.jpg",
        name: "Garfield",
        age: 39,
        food: "lasagna",
        sleeping_spots: ["dinner table", "Jon's bed"]
    };
    response.render("show_cat", cat_info);
});
app.get("/cats/2", function(request, response){
    var cat_info = {
        image_file: "/images/adorable-animal-blur-326875.jpg",
        name: "Lucy",
        age: "ancient",
        food: "your soul",
        sleeping_spots: ["evil never sleeps"]
    };
    response.render("show_cat", cat_info);
});
app.get("/cats/4", function(request, response){
    var cat_info = {
        image_file: "/images/animal-cat-face-close-up-416160.jpg",
        name: "Jack",
        age: 5,
        food: "mice",
        sleeping_spots: ["keyboard", "Sara's Face"]
    };
    response.render("show_cat", cat_info);
});
app.listen(8000);