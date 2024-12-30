let input = document.getElementById('display');
function equals(){
	try{
		input.value = eval(input.value);
	}catch{
		Alert('invalid input');
	}
}