//Audio objects
//var backgroundTrack = new Audio("sound/bg_music.mp3");
//Looping

// backgroundTrack.addEventListener('ended', function() {
//     this.currentTime = 0;
//     this.play();
// }, false);

//backgroundTrack.volume = 0.4;

//var mainTheme = new Audio("sound/theme.mp3");

// mainTheme.addEventListener('ended', function() {
//     this.currentTime = 0;
//     this.play();
// }, false);

//var spikesFX = new Audio("sound/spikes.mp3");

//var stepsFX = new Audio("sound/footsteps_stones.mp3");

// stepsFX.addEventListener('ended', function() {
//     this.currentTime = 0;
//     this.play();
// }, false);

//var openDoorFX = new Audio("sound/open_door.mp3");

//var finalExplosion = new Audio("sound/final_explosion.mp3");

//mainTheme.play();
var pewSFX = new Audio("sound/pew.mp3")
var splashSFX = new Audio("sound/splash.mp3");
var explosionSFX = new Audio("sound/explosion.mp3");

var MAX_SOUNDS = 5;
var max_sounds = MAX_SOUNDS;

function soundTake(){
	max_sounds++;
	this.removeEventListener('ended', soundTake, false);
	console.log('Max sounds restored: ' + max_sounds);
}

function playSound(sound){
	if(max_sounds > 0){
		max_sounds--;
		console.log('Max sounds lowered: ' + max_sounds);
		sound.play();
		sound.addEventListener('ended', soundTake, false);
	}
}
