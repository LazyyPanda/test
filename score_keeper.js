var player1=document.querySelector("#p1");
var player2=document.querySelector("#p2");
var reset=document.querySelector("#reset");
var score1=document.querySelector("#s1");
var score2=document.querySelector("#s2");
var maxs=document.querySelector("#maxs");
var input=document.querySelector("input");
p1s=0;
p2s=0;
gamewon=false;
winningscore=5;

	player1.addEventListener("click",function(){
		if(!gamewon){
		p1s++;
		score1.textContent=p1s;
		}
		if(p1s==winningscore){
			gamewon=true;
			alert("player1 won the game!!");
			score1.classList.add("winner");
			score2.classList.add("losser");
		}
	});

	player2.addEventListener("click",function(){
		if(!gamewon){
		p2s++;
		score2.textContent=p2s;
		}
		if(p2s==winningscore){
			gamewon=true;
			alert("player2 won the game!!");
			score1.classList.add("losser");
			score2.classList.add("winner");

		}
	});

reset.addEventListener("click",function(){
	score1.textContent="0";
	score2.textContent="0";
	p1s=0;
	p2s=0;
	gamewon=false;
	score1.classList.remove("winner");
	score2.classList.remove("winner");
	score1.classList.remove("losser");
	score2.classList.remove("losser");
	input.value=5;
	maxs.textContent=5;
});

input.addEventListener("change",function(){
	k=input.value;
	winningscore=k;
	maxs.textContent=k;



});
