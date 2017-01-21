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
		[ "w", "w", "w", "w", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "w", "w", "o", "o", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "w", "w", "e", "e", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
	],
	"definition" : 
	{
		"w" : { "type" : "wall", "sprite" : "wall1.png" , "passable" : false, "buildable" : true },
		"o" : { "type" : "floor", "sprite" : "ground1.png" , "passable" : true, "buildable" : true },
		"m" : {
			"type" : "minion",
			"sprite" : "minion1left.png",
			"passable" : false,
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