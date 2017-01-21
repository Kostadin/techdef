function spawn(wave, now){
	wave.count -= 1;
	wave.lastSpawnMS = now;
	var unit = {
		num: wave.count,
		maxHP: wave.maxHP,
		hp: wave.maxHP,
		sizeX: wave.sizeX,
		sizeY: wave.sizeY,
		sheet: wave.sheet,
		x: wave.x*TILE_WIDTH+(TILE_WIDTH/2.0),
		y: wave.y*TILE_HEIGHT+(TILE_HEIGHT/2.0)
	};
	state.units.push(unit);
	state.unitCell[Math.floor(unit.y/TILE_HEIGHT)][Math.floor(unit.x/TILE_WIDTH)].push(unit);
}

function updateWave(wave, now){
	if (!wave.started){
		if (wave.startMS >= now){
			wave.started = true;
			if (wave.count>0){
				spawn(wave, now);
			}
		}
	}
	if (wave.started){
		if ((wave.count>0) && (now - wave.lastSpawnMS >= wave.interval){
			spawn(wave, now);
		}
		wave.passedMS = now - wave.startMS;
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
