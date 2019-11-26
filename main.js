var audio;

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
	if(JSON.parse(localStorage.play_audio)){
		audio = new Audio('pldead00.wav');
		//localStorage.playback_rate = 1;
		//audio.playbackRate = localStorage.playback_rate;
		audio.volume = 0.3;
		audio.play();
	}
})

chrome.tabs.onCreated.addListener(function(tabid, created) {
	if(JSON.parse(localStorage.play_audio)){
		audio = new Audio('extend.wav');
		//localStorage.playback_rate = 1;
		//audio.playbackRate = localStorage.playback_rate;
		audio.volume = 0.3;
		audio.play();
	}
})

chrome.tabs.goBack.addListener(function(tabid, back) {
	if(JSON.parse(localStorage.play_audio)){
		audio = new Audio('test.wav');
		//localStorage.playback_rate = 1;
		//audio.playbackRate = localStorage.playback_rate;
		audio.volume = 0.3;
		audio.play();
	}
})
