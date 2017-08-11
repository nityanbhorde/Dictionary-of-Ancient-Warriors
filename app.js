let express = require("express");
let cors = require("cors");
let app = express();

let warriors = [
	{
		term: "Alexander the Great",
		definition: "A famous Greek king who conquered Persia,India, and Egypt; spreading Greek and Western civilization across Asia and and parts of Africa."
	},
	{
		term: "Genghis Khan",
		definition: "The Mongol destroyer who conquered a quarter of the world's population and is considered one of the greatest vanquishers of all time."
	},
	{
		term:"Leonidas of Sparta",
		definition:"One of the two kings of Sparta during the Greco-Persian wars; rumor has it he was the last Spartan standing against thousands of Persians at the battle of Thermopylae."
	}

];
app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`); //logs request methods
	next();
});

app.use(express.static("./public")); //file server for public directory 
app.use(cors()); // any domain can now make a request for dictionary-api

app.get("/dictionary-api",function(req,res){
	res.json(warriors);
});
app.listen(3000);

console.log("express running on port 3000");

module.exports = app;