
function renderInit() {
	renderer = PIXI.autoDetectRenderer(1280, 720);
	$('#mainMenu').after(renderer.view);

	stage = new PIXI.Container();
}

function loadAnimations() {
	
	var loader = new PIXI.loaders.Loader();
	/*
	loader.add('player_right', 'assets/raw/animation-player/MOVE/render-right/player_right.json');
	loader.add('player_left', 'assets/raw/animation-player/MOVE/render-left/player_left.json');
	loader.add('player_up', 'assets/raw/animation-player/MOVE/render-back/player_up.json');
	loader.add('player_down', 'assets/raw/animation-player/MOVE/render-front/player_down.json');

	loader.add('player_idle_right', 'assets/raw/animation-player/IDLE/render-right/player_idle_right.json');
	loader.add('player_idle_left', 'assets/raw/animation-player/IDLE/render-left/player_idle_left.json');
	loader.add('player_idle_up', 'assets/raw/animation-player/IDLE/render-back/player_idle_up.json');
	loader.add('player_idle_down', 'assets/raw/animation-player/IDLE/render-front/player_idle_down.json');

	loader.add('guard_1_right', 'assets/raw/animation-guard-1/WALK/right/guard_1_right.json');
	loader.add('guard_1_left', 'assets/raw/animation-guard-1/WALK/left/guard_1_left.json');
	loader.add('guard_1_up', 'assets/raw/animation-guard-1/WALK/up/guard_1_up.json');
	loader.add('guard_1_down', 'assets/raw/animation-guard-1/WALK/down/guard_1_down.json');

	loader.add('guard_1_idle_right', 'assets/raw/animation-guard-1/IDLE/right/guard_1_idle_right.json');
	loader.add('guard_1_idle_left', 'assets/raw/animation-guard-1/IDLE/left/guard_1_idle_left.json');
	loader.add('guard_1_idle_up', 'assets/raw/animation-guard-1/IDLE/up/guard_1_idle_up.json');
	loader.add('guard_1_idle_down', 'assets/raw/animation-guard-1/IDLE/down/guard_1_idle_down.json');
	*/
	loader.once('complete', function() {//loader.on('complete', function() {
		loadPlayerAnimations();
		loadGuardAnimations();
	});
	loader.load();
	
}

function loadPlayerAnimations() {
	/*
	var rightAnimFrames = [];
	var leftAnimFrames = [];
	var upAnimFrames = [];
	var downAnimFrames = [];
	for (var i = 0; i < 32; i++) {
		var iStr = i < 10 ? "0" + i : i.toString();
		var texture = PIXI.Texture.fromFrame('player_right_' + iStr + '.png');
		rightAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('player_left_' + iStr + '.png');
		leftAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('player_up_' + iStr + '.png');
		upAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('player_down_' + iStr + '.png');
		downAnimFrames[i] = texture;
	};

	var rightIdleAnimFrames = [];
	var leftIdleAnimFrames = [];
	var upIdleAnimFrames = [];
	var donwIdleAnimFrames = [];
	for (var i = 0; i < 16; i++) {
		var iStr = i < 10 ? "0" + i : i.toString();
		var texture = PIXI.Texture.fromFrame('player_idle_right_' + iStr + '.png');
		rightIdleAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('player_idle_left_' + iStr + '.png');
		leftIdleAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('player_idle_up_' + iStr + '.png');
		upIdleAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('player_idle_down_' + iStr + '.png');
		donwIdleAnimFrames[i] = texture;
	}

	playerAnimations = {
		"walkRight" : rightAnimFrames,
		"walkLeft" : leftAnimFrames,
		"walkUp" : upAnimFrames,
		"walkDown" : downAnimFrames,
		"idleRight" : rightIdleAnimFrames,
		"idleLeft" : leftIdleAnimFrames,
		"idleUp" : upIdleAnimFrames,
		"idleDown" : donwIdleAnimFrames
	}

	var keyToAnim = {
		"walkRight" : rightAnimFrames,
		"walkLeft" : leftAnimFrames,
		"walkUp" : upAnimFrames,
		"walkDown" : downAnimFrames,
		"idleRight" : rightIdleAnimFrames,
		"idleLeft" : leftIdleAnimFrames,
		"idleUp" : upIdleAnimFrames,
		"idleDown" : donwIdleAnimFrames
	}
	*/
}

function loadGuardAnimations() {
	/*var rightAnimFrames = [];
	var leftAnimFrames = [];
	var upAnimFrames = [];
	var downAnimFrames = [];
	for (var i = 0; i < 8; i++) {
		var iStr = i < 10 ? "0" + i : i.toString();
		var texture = PIXI.Texture.fromFrame('guard_1_right_' + iStr + '.png');
		rightAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('guard_1_left_' + iStr + '.png');
		leftAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('guard_1_up_' + iStr + '.png');
		upAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('guard_1_down_' + iStr + '.png');
		downAnimFrames[i] = texture;
	};

	var rightIdleAnimFrames = [];
	var leftIdleAnimFrames = [];
	var upIdleAnimFrames = [];
	var donwIdleAnimFrames = [];
	for (var i = 0; i < 14; i++) {
		var iStr = i < 10 ? "0" + i : i.toString();
		var texture = PIXI.Texture.fromFrame('guard_1_idle_right_' + iStr + '.png');
		rightIdleAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('guard_1_idle_left_' + iStr + '.png');
		leftIdleAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('guard_1_idle_up_' + iStr + '.png');
		upIdleAnimFrames[i] = texture;
		var texture = PIXI.Texture.fromFrame('guard_1_idle_down_' + iStr + '.png');
		donwIdleAnimFrames[i] = texture;
	}

	guardAnimations = {
		"walkRight" : rightAnimFrames,
		"walkLeft" : leftAnimFrames,
		"walkUp" : upAnimFrames,
		"walkDown" : downAnimFrames,
		"idleRight" : rightIdleAnimFrames,
		"idleLeft" : leftIdleAnimFrames,
		"idleUp" : upIdleAnimFrames,
		"idleDown" : donwIdleAnimFrames
	}*/
}

function startGame(level) {
	//just in case
	if(max_sounds != MAX_SOUNDS){
		max_sounds == MAX_SOUNDS;
		console.log("max_sounds shoud be " + MAX_SOUNDS);
	}

	//mainTheme.pause();
	//backgroundTrack.currentTime = 0;
	//backgroundTrack.play();

	$('#mainMenu').hide();

	loadLevel(level);

	renderInit();
	renderLevel();
	startUpdate();

	addMouseHandler();

	gameStartTime = Date.now();
	currentTime = gameStartTime;

	lastUpdate = 0;//currentTime;
	setInterval(function updateLoop() {
		var now = lastUpdate + STEP_TIME
		if (!showingScroll && !showingFinal){
			if (!restarting){
				for (var i=0; i<state.waves.length; ++i){
					updateWave(state.waves[i], now);
				}
				for (var i=0; i<state.units.length; ++i){
					updateUnit(state.units[i], now);
				}
			} else {
				if (now>= restartingUntil){
					restartingSprite.visible = false;
					restarting = false;
					restartingSprite.alpha = 0;
					loadLevel(state.currentLevelIndex);
					renderLevel();
				} else {
					restartingSprite.alpha = (now - restartingSince)/(restartingUntil - restartingSince);
				}
			}
		} else if (showingFinal) {
			if (!finalStartTimeMS){
				finalStartTimeMS = now;
				// Mute everything else
				backgroundTrack.pause();
				mainTheme.pause();
				//spikesFX.pause();
				//stepsFX.pause();
				//openDoorFX.pause();
				// Play explosion
				//finalExplosion.position = 0;
				//finalExplosion.play();
			} else {
				if (now>=finalStartTimeMS + reloadAfterMS){
					location.reload();
				} else {
					if (now >= finalStartTimeMS + blendAfterMS){
						var blendCoef = (now - (finalStartTimeMS + blendAfterMS)) / blendForMS;
						blendCoef = Math.max(0, Math.min(blendCoef, 1));
						finalSprite2.alpha = blendCoef;
					}
					if (now >= finalStartTimeMS + fadeAfterMS){
						var fadeCoef = (now - (finalStartTimeMS + fadeAfterMS)) / (reloadAfterMS - fadeAfterMS);
						fadeCoef = Math.max(0, Math.min(fadeCoef, 1));
						if (fadeCoef<1){
							console.log(fadeCoef);
						}
						fadeSprite.alpha = fadeCoef;
					}
				}
			}
		}
		lastUpdate = now;
	}, STEP_TIME);
	$('canvas').show();
}

function pauseGame(){
}

function update() {
	renderer.render(stage);
	requestAnimationFrame(update);
};

function startUpdate() {
	requestAnimationFrame( update );
}

var typeLoader = {
/*
	"altar" : function altarLoader(altar, x, y) {
		var notVisited = PIXI.Sprite.fromImage("assets/raw/" + altar.sprites.notVisited);
		notVisited.position.x = TILE_WIDTH * x;
		notVisited.position.y = TILE_HEIGHT * y;
		stage.addChild(notVisited);
		altar.spriteNotVisited = notVisited;

		var visited = PIXI.Sprite.fromImage("assets/raw/" + altar.sprites.visited);
		visited.position.x = TILE_WIDTH * x;
		visited.position.y = TILE_HEIGHT * y;
		altar.spriteVisited = visited;
		visited.visible = false;
		stage.addChild(visited);

	},
	"spikes" : function spikesLoader(spikes, x, y) {
		var floor = PIXI.Sprite.fromImage("assets/raw/" + spikes.sprites.floor);
		floor.position.x = TILE_WIDTH * x;
		floor.position.y = TILE_HEIGHT * y;
		stage.addChild(floor);

		var hidden = PIXI.Sprite.fromImage("assets/raw/" + spikes.sprites.hidden);
		hidden.position.x = TILE_WIDTH * x;
		hidden.position.y = TILE_HEIGHT * y;
		stage.addChild(hidden);
		spikes.spriteHidden = hidden;

		var shown = PIXI.Sprite.fromImage("assets/raw/" + spikes.sprites.shown);
		shown.position.x = TILE_WIDTH * x;
		shown.position.y = TILE_HEIGHT * y;
		shown.visible = false;
		stage.addChild(shown);
		spikes.spriteShown = shown;
	},
	"door" : function doorLoad(door, x, y) {
		var openned = PIXI.Sprite.fromImage("assets/raw/" + door.sprites.open);
		openned.position.x = TILE_WIDTH * x;
		openned.position.y = TILE_HEIGHT * y;
		openned.visible = false;
		stage.addChild(openned);
		door.spriteOpenned = openned;

		var closed = PIXI.Sprite.fromImage("assets/raw/" + door.sprites.close);
		closed.position.x = TILE_WIDTH * x;
		closed.position.y = TILE_HEIGHT * y;
		stage.addChild(closed);
		door.spriteClosed = closed;

		door.open = function() {
			openned.visible = true;
			closed.visible = false;
			door.passable = true;
			openDoorFX.position = 0;
			openDoorFX.play();
		};
	}, 
	"scroll" : function scrollLoad(scroll, x, y) {
		var floor = PIXI.Sprite.fromImage("assets/raw/" + scroll.sprites.floor);
		floor.position.x = TILE_WIDTH * x;
		floor.position.y = TILE_HEIGHT * y;
		scroll.sprites.floor = floor;
		stage.addChild(floor);

		var scrollSprite = PIXI.Sprite.fromImage("assets/raw/" + scroll.sprites.scroll);
		scrollSprite.position.x = TILE_WIDTH * x;
		scrollSprite.position.y = TILE_HEIGHT * y;
		stage.addChild(scrollSprite);
		scroll.sprites.scroll = scrollSprite;

		scroll.open = function() {
			showScroll();
			scrollSprite.visible = false;
		};
	}
*/
}

function renderLevel(onLoaded) {
	stage.removeChildren();

	var currentLevel = state.currentLevel;
	
	for (var y = 0; y < currentLevel.length; y++) {
		for (var x = 0; x < currentLevel[y].length; x++) {
			var tiles = currentLevel[y][x];
			if (!(tiles.constructor === Array)){
				tiles = [tiles];
			}
			for (var i=0;i<tiles.length;++i){
				var tile = tiles[i];
				if (typeLoader[tile.type]) {
					typeLoader[tile.type](tile, x, y);
				} else {
					var sprite = PIXI.Sprite.fromImage("assets/" + tile.sprite);
					sprite.position.x = TILE_WIDTH * x;
					sprite.position.y = TILE_HEIGHT * y;
					stage.addChild(sprite);
					tile.sprite = sprite;
				}
			}
		};
	};
	
	var darkSprite = PIXI.Sprite.fromImage("assets/dark.png");
	darkSprite.position.x = 0;
	darkSprite.position.y = 0;
	stage.addChild(darkSprite);
	restartingSprite = PIXI.Sprite.fromImage("assets/restarting.png");
	restartingSprite.position.x = 0;
	restartingSprite.position.y = 0;
	restartingSprite.alpha = 0;
	restartingSprite.visible = false;
	finalSprite1 = PIXI.Sprite.fromImage("assets/final_frame_1.png");
	finalSprite1.position.x = 0;
	finalSprite1.position.y = 0;
	finalSprite1.visible = false;
	finalSprite2 = PIXI.Sprite.fromImage("assets/final_frame_2.png");
	finalSprite2.position.x = 0;
	finalSprite2.position.y = 0;
	finalSprite2.alpha = 0;
	finalSprite2.visible = false;
	fadeSprite = PIXI.Sprite.fromImage("assets/fade.png");
	fadeSprite.position.x = 0;
	fadeSprite.position.y = 0;
	fadeSprite.alpha = 0;
	fadeSprite.visible = false;
	//resetPlayerPos();
	//resetGuards();

	stage.addChild(restartingSprite);
	stage.addChild(finalSprite1);
	stage.addChild(finalSprite2);
	stage.addChild(fadeSprite);
}

function showFinal(){
	showingFinal = true;
	finalSprite1.visible = true;
	finalSprite2.visible = true;
	fadeSprite.visible = true;
}



