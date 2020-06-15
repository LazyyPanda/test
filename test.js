// var option = prompt("What you want to do?");
// var list=[];
// var i=0;
// while(option!="quit"){
// 	var option = prompt("What you want to do?");
// 	if(option=="new"){
// 		var add = prompt("Enter a new to do");
// 		list[i]=add;
// 		i++;
// 		console.log("A new item "+ add + "is added");
// 	}
// 	else{
// 		console.log(list);
// 	}
// }

// function printReverse(arr){
// 	for(var i = arr.length-1 ; i>=0 ;i--)
// 		console.log(arr[i]);
	
// }
// function isUniform(arr){
// 	var k=0;
// 	for(var i=0;i<arr.length-1;i++){
// 		if(arr[i]==arr[i+1])
// 			k=0;
// 		else
// 			k++;
// 	}
// 	return k==0;
// }
function sumArray(sum){
	var result=0;
	for(var i=0;i<sum.length;i++){
		result+=sum[i];
	}
	return result;
}