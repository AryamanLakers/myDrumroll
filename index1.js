function switch_func(key_input){
	switch (key_input) {
			case 'w':
				var audio=new Audio("sounds/crash.mp3");
				audio.play();
				break;

			case 'a':
				var audio=new Audio("sounds/kick-bass.mp3");
				audio.play();
				break;

			case 's':
				var audio=new Audio("sounds/snare.mp3");
				audio.play();
				break;

			case 'd':
				var audio=new Audio("sounds/tom-1.mp3");
				audio.play();
				break;

			case 'j':
				var audio=new Audio("sounds/tom-2.mp3");
				audio.play();
				break;

			case 'k':
				var audio=new Audio("sounds/tom-3.mp3");
				audio.play();
				break;

			case 'l':
				var audio=new Audio("sounds/tom-4.mp3");
				audio.play();
				break;
			default:
				alert("Wrong key pressed");
				break;
		}
}
var numberbuttons=$("button").click(function(e){
	var but=e.target;
	switch_func(but.classList[0]);
	animation(but.classList[0]);
});

$("document").on("keypress",function(e){
	console.log("hello");
});

function animation(current_key){
	
	$("button"+"."+current_key).addClass("pressed");
	setTimeout(func, 100);

}
function func(){
	$("button").removeClass("pressed");
}