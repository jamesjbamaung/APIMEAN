//var tasks = require("../controllers/tasks.js");

module.exports = function(app){

    app.get("/", function(req, res) {
        res.render('index');
    })
}