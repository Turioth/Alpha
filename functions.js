var ki = 1;
			
function Meditation(){
	var progress = document.querySelector('.progress-done');
	var medBarWidth = 1;
	var id = setInterval(frame, 40);
	function frame(){
		if (medBarWidth >= 100){
			clearInterval(id);
			progress.style.width = 0;
			ki = ki + 1;
			document.getElementById("ki").innerHTML = ki;
		}
		else{
			medBarWidth++;
			progress.style.width = medBarWidth + '%';
			progress.style.opacity = 1;
		}
	}
}