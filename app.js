let express = require("express");

let app = express();

app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`); //logs request methods
	next();
});

app.use(express.static("./public")); //file server for public directory 

app.listen(3000);

console.log("express running on port 3000");

module.exports = app;