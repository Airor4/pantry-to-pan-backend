

exports.spoonacular = (req, res) => {
	// first parse out the body
	// then make query to spoonacular
	// then respond with json
	res.json({"message": "you have reached the spoonacular api"});
}

exports.allRecipes = (req, res) => {
	res.send('all recipes api not implmented yet');
}