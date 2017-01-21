levels[0] = 
{	
	"map" :
	[
		[ "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
		[ "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o"],
		[ "o", "w", "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w", "w", "o"],
		[ "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
		[ "o", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "o"],
		[ "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
		[ "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "w", "o", "o", "o", "o", "w", "w", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "w", "w", "o", "o", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
		[ "w", "w", "w", "w", "w", "w", "w", "w", "w", ["o", "e"], ["o", "e"], "w", "w", "w", "w", "w", "w", "w", "w", "w"]
	],
	"waves" : [
		{
			"startMS": 1000,
			"count": 45,
			"interval": 50,
			"x": 3,
			"y": 0,
			"speed": 8,
			"maxHP": 100,
			"sizeX": 32,
			"sizeY": 32,
			"sheet": "minion1"
		},
		{
			"startMS": 1000,
			"count": 45,
			"interval": 50,
			"x": 13,
			"y": 0,
			"speed": 8,
			"maxHP": 100,
			"sizeX": 32,
			"sizeY": 32,
			"sheet": "minion2"
		},
		{
			"startMS": 200,
			"count": 20,
			"interval": 150,
			"x": 9,
			"y": 0,
			"speed": 4,
			"maxHP": 250,
			"sizeX": 58,
			"sizeY": 58,
			"sheet": "minionboss"
		},
		{
			"startMS": 1000,
			"count": 45,
			"interval": 50,
			"x": 10,
			"y": 0,
			"speed": 8,
			"maxHP": 100,
			"sizeX": 32,
			"sizeY": 32,
			"sheet": "minion3"
		}
	],
	"definition" : 
	{
		"w" : { "type" : "wall", "sprite" : "wall1.png" , "passable" : false, "buildable" : true },
		"o" : { "type" : "floor", "sprite" : "ground1.png" , "passable" : true, "buildable" : true },
		"e" : 
		{
			"type" : "exit",
			"sprite" : "exit1.png",
			"passable" : true,
			"buildable" : false
		}
	},
	"tower_templates" : {
		"q" : {
			"projectile": "plasma",
			"interval": 100,
			"duration": 50,
			"range": 150,
			"damage": 10,
			"sheet": "tower1"
		},
		"w" : {
			"projectile": "laser",
			"interval": 250,
			"duration": 50,
			"range": 150,
			"damage": 10,
			"sheet": "tower3"
		},
		"e" : {
			"projectile": "granade",
			"interval": 350,
			"duration": 50,
			"range": 150,
			"damage": 10,
			"sheet": "tower2"
		}
	}
};