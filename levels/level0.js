levels[0] = 
{	
	"map" :
	[
		[ "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
		[ "o", "o", "o", "w", "o", "o", "o", "o", "o", ["o", "m"], "o", "o", "o", "o", "o", "o", "w", "o", "o", "o"],
		[ "o", "w", "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w", "w", "o"],
		[ "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
		[ "o", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "o"],
		[ "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
		[ "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "w", "w", "o", "o", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "w", "w", "e", "e", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
	],
	"waves" : [
		{
			"startMS": 1000,
			"count": 5,
			"interval": 500,
			"x": 3,
			"y": 0,
			"speed": 0.1,
			"maxHP": 100,
			"sizeX": 32,
			"sizeY": 32,
			"sheet": "minion1"
		}
	],
	"definition" : 
	{
		"w" : { "type" : "wall", "sprite" : "wall1.png" , "passable" : false, "buildable" : true },
		"o" : { "type" : "floor", "sprite" : "ground1.png" , "passable" : true, "buildable" : true },
		"m" : {
			"type" : "minion",
			"sprite" : "minion1left.png",
			"passable" : true,
			"buildable" : false
		},
		"e" : 
		{
			"type" : "exit",
			"sprite" : "exit1.png",
			"passable" : true,
			"buildable" : false
		}
	}
};