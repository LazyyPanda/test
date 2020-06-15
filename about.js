var button=document.querySelector("button");
isPurple=true;
button.addEventListener("click",function(){
	if (isPurple){
 		document.body.style.background="purple";
 		
	}
	else{
		document.body.style.background="white";
		
	}

isPurple=!isPurple;
});
