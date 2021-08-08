var ki = 1;
			
function Meditation(){
	var progress = document.querySelector('.progress-done');
	var medBarWidth = 1;
	var id = setInterval(frame, 60);
	function frame(){
		if (medBarWidth >= 100){
			clearInterval(id);
			ki = ki + 10;
		}
		else{
			medBarWidth++;
			progress.style.width = medBarWidth + '%';
			progress.style.opacity = 1;
		}
	}
	document.getElementById("ki").innerHTML = ki;
}