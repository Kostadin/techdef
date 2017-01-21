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
		avgRadius: (wave.sizeY + wave.sizeX)/3.5,
		sheet: wave.sheet,
		x: wave.x*TILE_WIDTH+(HALF_TILE_WIDTH),
		y: wave.y*TILE_HEIGHT+(HALF_TILE_HEIGHT),
		speed: wave.speed,
		lastX: -1,
		lastY: -1
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

function removeUnit(unit){
	var gridX = Math.floor(unit.x/TILE_WIDTH);
	var gridY = Math.floor(unit.y/TILE_WIDTH);
	var oldUnitCell = state.unitCell[gridY][gridX];
	for (var i=0;i<oldUnitCell.length;++i){
		if (oldUnitCell[i] === unit){
			oldUnitCell.splice(i, 1);
			break;
		}
	}
	for (var i=0; i<state.units.length; ++i){
		if (state.units === unit){
			state.units.splice(i, 1);
		}
	}
	stage.removeChild(unit.sprite);
}

function unitExits(unit){
	removeUnit(unit);
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

function honorLimits(unit){
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
	if ((gridX+1<state.levelGridWidth)&&(!state.passable[gridY][gridX+1])&&(unit.x>(gridX+1)*TILE_WIDTH-unit.halfSizeX)){
		unit.x = (gridX+1)*TILE_WIDTH-unit.halfSizeX;
	}
	// Down
	if ((gridY+1<state.levelGridHeight)&&(!state.passable[gridY+1][gridX])&&(unit.y>(gridY+1)*TILE_HEIGHT-unit.halfSizeY)){
		unit.y = (gridY+1)*TILE_HEIGHT-unit.halfSizeY;
	}
	
	// Up left
	if ((gridY-1>=0)&&(gridX-1>=0)&&(!state.passable[gridY-1][gridX-1])){
		var dTop = (unit.y-unit.halfSizeY) - (gridY*TILE_HEIGHT);
		var dLeft = (unit.x-unit.halfSizeX) - (gridX*TILE_WIDTH);
		if ((dTop<0)&&(dLeft<0)){
			var aTop = Math.abs(dTop);
			var aLeft = Math.abs(dLeft);
			if (aTop>aLeft){ // Shift right
				unit.x = gridX*TILE_WIDTH+unit.halfSizeX;
			} else if (aTop<aLeft){ // Shift down
				unit.y = gridY*TILE_HEIGHT+unit.halfSizeY;
			} else { // Shift down right
				unit.x = gridX*TILE_WIDTH+unit.halfSizeX;
				unit.y = gridY*TILE_HEIGHT+unit.halfSizeY;
			}
		}
	}
	// Up right
	if ((gridY-1>=0)&&(gridX+1<state.levelGridWidth)&&(!state.passable[gridY-1][gridX+1])){
		var dTop = (unit.y-unit.halfSizeY) - (gridY*TILE_HEIGHT);
		var dRight = (unit.x+unit.halfSizeX) - ((gridX+1)*TILE_WIDTH);
		if ((dTop<0)&&(dRight>0)){
			var aTop = Math.abs(dTop);
			var aRight = Math.abs(aRight);
			if (aTop>aRight){ // Shift left
				unit.x = (gridX+1)*TILE_WIDTH-unit.halfSizeX;
			} else if (aTop<aRight){ // Shift down
				unit.y = gridY*TILE_HEIGHT+unit.halfSizeY;
			} else { // Shift down left
				unit.x = (gridX+1)*TILE_WIDTH-unit.halfSizeX;
				unit.y = gridY*TILE_HEIGHT+unit.halfSizeY;
			}
		}
	}
	// Down left
	if ((gridY+1<state.levelGridHeight)&&(gridX-1>=0)&&(!state.passable[gridY+1][gridX-1])){
		var dDown = (unit.y+unit.halfSizeY) - ((gridY+1)*TILE_HEIGHT);
		var dLeft = (unit.x-unit.halfSizeX) - (gridX*TILE_WIDTH);
		if ((dDown>0)&&(dLeft<0)){
			var aDown = Math.abs(dDown);
			var aLeft = Math.abs(dLeft);
			if (aDown>aLeft){ // Shift right
				unit.x = gridX*TILE_WIDTH+unit.halfSizeX;
			} else if (aDown<aRight){ // Shift up
				unit.y = (gridY+1)*TILE_HEIGHT-unit.halfSizeY;
			} else { // Shift up left
				unit.x = gridX*TILE_WIDTH+unit.halfSizeX;
				unit.y = (gridY+1)*TILE_HEIGHT-unit.halfSizeY;
			}
		}
	}
	// Down right
	if ((gridY+1<state.levelGridHeight)&&(gridX+1<state.levelGridWidth)&&(!state.passable[gridY+1][gridX+1])){
		var dDown = (unit.y+unit.halfSizeY) - ((gridY+1)*TILE_HEIGHT);
		var dRight = (unit.x+unit.halfSizeX) - ((gridX+1)*TILE_WIDTH);
		if ((dDown>0)&&(dRight>0)){
			var aDown = Math.abs(dDown);
			var aRight = Math.abs(aRight);
			if (aDown>aRight){ // Shift left
				unit.x = (gridX+1)*TILE_WIDTH-unit.halfSizeX;
			} else if (aDown<aRight){ // Shift up
				unit.y = (gridY+1)*TILE_HEIGHT-unit.halfSizeY;
			} else { // Shift up left
				unit.x = (gridX+1)*TILE_WIDTH-unit.halfSizeX;
				unit.y = (gridY+1)*TILE_HEIGHT-unit.halfSizeY;
			}
		}
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
}

var WALL_WIND_THRESHOLD = 2;

function updateUnit(unit, now){
	var gridX = Math.floor(unit.x/TILE_WIDTH);
	var gridY = Math.floor(unit.y/TILE_WIDTH);
	var oldGridX = gridX;
	var oldGridY = gridY;
	var oldUnitCell = state.unitCell[oldGridY][oldGridX];
	
	// Flow
	var flowArr = state.flow[gridY][gridX][unit.num % state.flow[gridY][gridX].length];
	var flow = {y: flowArr[0], x: flowArr[1]};
	scaleVector(flow, unit.speed);
	pointAdd(unit, flow);
	
	honorLimits(unit);
	
	// Wall wind
	for (var y=-1; y<=1; ++y){
		if ((gridY+y>=0)&&(gridY+y<state.levelGridHeight)){
			for (var x=-1; x<=1; ++x){
				if ((gridX+x>=0)&&(gridX+x<state.levelGridWidth)&&(!state.passable[gridY+y][gridX+x])){
					var dx = unit.x - ((gridX+x)*TILE_WIDTH + HALF_TILE_WIDTH);
					var dy = unit.y - ((gridY+y)*TILE_HEIGHT + HALF_TILE_HEIGHT);
					if (Math.abs(dx)<HALF_TILE_WIDTH+unit.halfSizeX+WALL_WIND_THRESHOLD){
						unit.x += Math.sign(dx)*WALL_WIND_THRESHOLD;
					}
					if (Math.abs(dy)<HALF_TILE_HEIGHT+unit.halfSizeY+WALL_WIND_THRESHOLD){
						unit.y += Math.sign(dy)*WALL_WIND_THRESHOLD;
					}
				}
			}
		}
	}
	
	honorLimits(unit);
	
	// Evade other minions
	var evade = {x: 0.0, y: 0.0};
	var evadedUnits = 0;
	for (var y=oldGridY-1; y<=oldGridY+1; ++y){
		if ((0<=y)&&(y<state.levelGridHeight)){
			for (var x=oldGridX-1; x<=oldGridX+1; ++x){
				if ((0<=x)&&(x<state.levelGridWidth)&&(state.passable[y][x])&&(state.unitCell[y][x].length>0)){
					var unitCell = state.unitCell[y][x];
					for (var i=0; i<unitCell.length; ++i){
						var otherUnit = unitCell[i];
						if (otherUnit != unit){
							var dist = Math.sqrt(sqrDist(unit, otherUnit));
							if (dist<(unit.avgRadius + otherUnit.avgRadius)){
								var scale = 1-(dist/(unit.avgRadius + otherUnit.avgRadius));
								scale *= scale;
								var evasionMove = {x: (unit.x-otherUnit.x)*scale, y: (unit.y-otherUnit.y)*scale};
								if (scale>0.9){ // Random escape if the units are right on top of each other
									evasionMove.x += Math.floor(Math.random()*5-2);
									evasionMove.y += Math.floor(Math.random()*5-2);
								}
								//pointAdd(evade, evasionMove);
								//evadedUnits += 1;
								pointAdd(unit, evasionMove);
								honorLimits(unit);
							}
						}
					}
				}
			}
		}
	}
	/*
	if (evadedUnits>0){
		scaleVector(evade, 1/evadedUnits);
		pointAdd(unit, evade);
		honorLimits(unit);
	}
	*/
	
	var gridY = Math.floor(unit.y/TILE_HEIGHT);
	var gridX = Math.floor(unit.x/TILE_WIDTH);
	unit.sprite.position.x = unit.x - (unit.halfSizeX);
	unit.sprite.position.y = unit.y - (unit.halfSizeY);
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
	
	// Jiggle to get unstuck
	if ((unit.lastX === Math.floor(unit.x))&&(unit.lastY === Math.floor(unit.y))){
		unit.x += Math.round(Math.random()*3-1.5);
		unit.y += Math.round(Math.random()*3-1.5);
	}
	
	honorLimits(unit);
	
	// Check the exit
	if (state.exit[gridY][gridX]){
		unitExits(unit);
	}
	
	unit.lastX = Math.floor(unit.x);
	unit.lastY = Math.floor(unit.y);
}

function unitRenderSortComparator(a, b){
	if (a.y === b.y){
		return a.x - b.x;
	} else {
		return a.y - b.y;
	}
}

function sortUnits(){
	for (var y=0; y<state.levelGridHeight; ++y){
		for (var x=0; x<state.levelGridWidth; ++x){
			if (state.unitCell[y][x].length>1){
				state.unitCell[y][x].sort(unitRenderSortComparator);
				for (var i=0; i<state.unitCell[y][x].length; ++i){
					var unit = state.unitCell[y][x][i];
					stage.removeChild(unit.sprite);
					stage.addChild(unit.sprite);
				}
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
