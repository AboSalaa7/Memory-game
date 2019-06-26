
function rotate(x) {
	x.style.transform="rotateX(90deg)";

}

function getRandomArbitrary() { 
    return Math.random() *35;
}
function shuffle(){
	for (var i = 0 ; i < 35; i++) {
		
		var x1=Math.floor(getRandomArbitrary());
		var x2=Math.floor(getRandomArbitrary());
	
		var temp=document.getElementsByClassName("q1")[x1].src;
		document.getElementsByClassName("q1")[x1].src=document.getElementsByClassName("q1")[x2].src;
		document.getElementsByClassName("q1")[x2].src=temp;

	}
	