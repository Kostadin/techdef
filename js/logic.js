function spawn(wave, now){
	wave.count -= 1;
	wave.lastSpawnMS = now;
	var unit = {
		num: wave.count,
		maxHP: wave.maxHP,
		hp: wave.maxHP,
		sizeX: wave.sizeX,
		halfSizeX: wave.sizeX/2.0,
		sizeY: wave.sizeY,
		halfSizeY: wave.sizeY/2.0,
		sheet: wave.sheet,
		x: wave.x*TILE_WIDTH+(HALF_TILE_WIDTH),
		y: wave.y*TILE_HEIGHT+(HALF_TILE_HEIGHT),
		speed: wave.speed
	};
	state.units.push(unit);
	var ucY = Math.floor(unit.y/TILE_HEIGHT);
	var ucX = Math.floor(unit.x/TILE_WIDTH);
	state.unitCell[ucY][ucX].push(unit);
	var sprite = PIXI.Sprite.fromImage("assets/" + unit.sheet+"/"+unit.sheet+"_down1.png");
	sprite.position.x = unit.x - (unit.halfSizeX);
	sprite.position.y = unit.y - (unit.halfSizeY);
	unit.sprite = sprite;
	stage.addChild(sprite);
}

function updateWave(wave, now){
	if (!wave.started){
		if (wave.startMS <= now){
			wave.started = true;
			if (wave.count>0){
				spawn(wave, now);
			}
		}
	}
	if (wave.started){
		if ((wave.count>0) && (now - wave.lastSpawnMS >= wave.interval)){
			spawn(wave, now);
		}
		wave.passedMS = now - wave.startMS;
	}
}

function updateUnit(unit, now){
	var gridX = Math.floor(unit.x/TILE_WIDTH);
	var gridY = Math.floor(unit.y/TILE_WIDTH);
	var oldGridX = gridX;
	var oldGridY = gridY;
	
	// Flow
	var flowArr = state.flow[gridY][gridX][unit.num % state.flow[gridY][gridX].length];
	var flow = {y: flowArr[0], x: flowArr[1]};
	scaleVector(flow, unit.speed);
	pointAdd(unit, flow);	
	var gridY = Math.floor(unit.y/TILE_WIDTH);
	var gridX = Math.floor(unit.x/TILE_WIDTH);
	
	// Walls
	// Up
	if ((gridY-1>=0)&&(!state.passable[gridY-1][gridX])&&(unit.y<gridY*TILE_HEIGHT+unit.halfSizeY)){
		unit.y = gridY*TILE_HEIGHT+unit.halfSizeY;
	}
	// Left
	if ((gridX-1>=0)&&(!state.passable[gridY][gridX-1])&&(unit.x<gridX*TILE_WIDTH+unit.halfSizeX)){
		unit.x = gridX*TILE_WIDTH+unit.halfSizeX;
	}
	// Right
	if ((gridX+1<state.levelGridWidth)&&(!state.passable[gridY][gridX+1])&&(unit.x>(gridX+1)*TILE_HEIGHT-unit.halfSizeX)){
		unit.x = (gridX+1)*TILE_WIDTH-unit.halfSizeX;
	}
	// Down
	if ((gridY+1<state.levelGridHeight)&&(!state.passable[gridY+1][gridX])&&(unit.y>(gridY+1)*TILE_HEIGHT-unit.halfSizeY)){
		unit.y = (gridY+1)*TILE_HEIGHT-unit.halfSizeY;
	}
	
	// Level limits
	if (unit.y<(unit.halfSizeY)){
		unit.y = (unit.halfSizeY);
	}
	if (unit.y>(state.levelGridHeight*TILE_HEIGHT - (unit.halfSizeY))){
		unit.y = (state.levelGridHeight*TILE_HEIGHT - (unit.halfSizeY))
	}
	if (unit.x<(unit.halfSizeX)){
		unit.x = (unit.halfSizeX);
	}
	if (unit.x>(state.levelGridWidth*TILE_WIDTH - (unit.halfSizeX))){
		unit.x =(state.levelGridWidth*TILE_WIDTH - (unit.halfSizeX))
	}
	var gridY = Math.floor(unit.y/TILE_HEIGHT);
	var gridX = Math.floor(unit.x/TILE_WIDTH);
	unit.sprite.position.x = unit.x - (unit.halfSizeX);
	unit.sprite.position.y = unit.y - (unit.halfSizeY);
	var oldUnitCell = state.unitCell[oldGridY][oldGridX];
	var newUnitCell = state.unitCell[gridY][gridX];
	if (oldUnitCell != newUnitCell){
		for (var i=0;i<oldUnitCell.length;++i){
			if (oldUnitCell[i] === unit){
				oldUnitCell.splice(i, 1);
				newUnitCell.push(unit);
				break;
			}
		}
	}
}

function playerDied(now) {
/*
	//alert('dead');
	//loadLevel(state.currentLevelIndex);
	//renderLevel();
	// Code above moved to renderer
	restartingSince = now;
	restartingUntil = now + restartingLengthMS;
	restarting = true;
	restartingSprite.visible = true;
*/
}

function goToNextLevel() {
	loadLevel(state.currentLevelIndex+1);
	renderLevel();
}
