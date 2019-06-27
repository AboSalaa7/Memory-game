var GameIsOn = false;
var numOfSuccPairs = 0;
var selectedpics = [];
var map =[];
var boolmap=[];

function rotate(x) {
	if(GameIsOn){
	x.style.transform="rotateX(90deg)";
callsleep();
	selectedpics.push(x.className.toString().slice(6));
	//alert(selectedpics[selectedpics.length-1]);
	boolmap[Math.floor(Number(x.className.toString().slice(6))/6)][Math.floor(Number(x.className.toString().slice(6))%6)]=true;
	//alert(boolmap[Number(x.className.toString().slice(6))/6][Number(x.className.toString().slice(6))%6]);
	//alert(selectedpics.length);
		
	}
}
function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }
function callsleep(){
	if(selectedpics.length==1){

	    	sleep(1);}
		if(selectedpics.length==2){
			//alert("its true");

			isMatched();}
}
function isMatched() {
	if(!(document.getElementsByClassName("q1")[Number(selectedpics[0])].src==document.getElementsByClassName("q1")[Number(selectedpics[1])].src)){
			document.getElementsByClassName("joker")[(selectedpics[0])].style.transform="rotateX(0deg)";
			document.getElementsByClassName("joker")[(selectedpics[1])].style.transform="rotateX(0deg)";
			boolmap[Math.floor(Number(selectedpics[0]/6))][Math.floor(Number(selectedpics[1]%6))] = false;
			boolmap[Math.floor(Number(selectedpics[1]/6))][Math.floor(Number(selectedpics[1]&6))] = false;
	}else{
		numOfSuccPairs++;
	}
	selectedpics.pop();
	selectedpics.pop();
}

function getRandomArbitrary() { 
    return Math.random() *35;
}
function shuffle(Button){
		GameIsOn =true;
		if(Button.innerHTML=="Reset"){
    	for(var i = 0 ; i < 6;i++){
    		for(var j = 0 ; j <6 ;j++){
    		if(boolmap[i][j]==true){
    					document.getElementsByClassName("joker")[(i*6)+j].style.transform="rotateX(360deg)";
    			}
    		}
   		}
    }
	for (var i = 0 ; i < 35; i++) {
		
		var x1=Math.floor(getRandomArbitrary());
		var x2=Math.floor(getRandomArbitrary());
	
		var temp=document.getElementsByClassName("q1")[x1].src;
		document.getElementsByClassName("q1")[x1].src=document.getElementsByClassName("q1")[x2].src;
		document.getElementsByClassName("q1")[x2].src=temp;

     }
     
   for(var i = 0 ; i < 6;i++){ var submap = []; var subbool = [];
     	for(var j = 0 ; j < 6;j++){
     		submap.push(document.getElementsByClassName("q1")[(i*6)+j].src);
     		subbool.push(false);
     	}map.push(submap);
     	boolmap.push(subbool);
     }
     Button.innerHTML="Reset";

 }




	