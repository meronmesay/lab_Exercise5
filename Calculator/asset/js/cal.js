function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function square() {
	return document.getElementById("sqrt").innerText;
}
function root() {
	return document.getElementById("root").innerText;
}
function power(x,y) {
	return document.getElementById("pow").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	var n = Number(num);
	return n;
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
            printOutput("");
		}
		else if (this.id=='sqrt'){
			var output=getFormattedNumber(getOutput())
			output=output*output;
			printOutput(output);
		}
		else if (this.id=='root') {
			var output=getFormattedNumber(getOutput())
			output=Math.sqrt(output);
			printOutput(output);
		}
		else if (this.id=='pow') {
			var output=getFormattedNumber(getOutput())
			var output2=getFormattedNumber(getOutput())
			 output3=Math.pow(output,output2)
			printOutput(output3);
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output!="" || history!=""){
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory(history);
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=getFormattedNumber(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
