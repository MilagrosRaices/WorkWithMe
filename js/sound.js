let playingAudio = new Array();

function checkPause(){
	if (playingAudio.length==0) {
		document.getElementById("pauseAll").parentNode.className="massPause hidden";
	} else{
		document.getElementById("pauseAll").parentNode.className="massPause";
	}
}

checkPause();

// Play audio

function playSound(audioNum) {
	let sound=document.getElementById(audioNum);

	if(sound.paused){
		sound.play();
		sound.parentNode.className="audio pressed";
		playingAudio.push(audioNum);
		checkPause();
	} else {
		sound.pause();
		sound.parentNode.className="audio unpressed";
		playingAudio.splice(playingAudio.indexOf(audioNum), 1);
		checkPause();
	}
}

// Volumen

function changeVolume(audioNum, val) {
	let sound=document.getElementById(audioNum);
	sound.volume = val;

	if (val==0) {
		sound.parentNode.querySelector("#vol").className="volume-control muted";
	} else {
		sound.parentNode.querySelector("#vol").className="volume-control";
	}
}

//Pausar

function pauseAll() {
	if (document.getElementById("pauseAll").checked) {
		for (let number of playingAudio) {
			document.getElementById(number).pause();
			document.getElementById(number).parentNode.className="audio unpressed";
			document.getElementById("pauseNotice").innerHTML="Resume &nbsp;";
		}
	} else {
		for (let number of playingAudio) {
			document.getElementById(number).play();
			document.getElementById(number).parentNode.className="audio pressed";
			document.getElementById("pauseNotice").innerHTML="Pause all &nbsp;";
		}
	}
}

//Modal

let modal = document.getElementById("myModal");
let btn = document.getElementById("modalButton");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
