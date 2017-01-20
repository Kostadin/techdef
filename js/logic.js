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
