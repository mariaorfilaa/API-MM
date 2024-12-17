const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
		ocument.getElementById ("%"). innerHTML = resultado. percentage + "%"
	
		if(parseInt(resultado.percentage) < 20){
			document.getElementById("foto").src="./img/"
			document.getElementById("r").innerHTML = ""
		}if(parseInt(resultado.percentage) >=  20 && resultado.percentage < 50){
			document.getElementById("foto").src="./img/"
			document.getElementById("r").innerHTML = ""
		}
		if(parseInt(resultado.percentage)>= 50 && resultado.percentage < 75){
			document.getElementById("foto").src = "./img/"
			document.getElementById("r").innerHTML = ""
		}if(parseInt(resultado.percentage)>= 75  && resultado.percentage < 99){
			document.getElementById("foto").src ="./img/"
			document.getElementById("r").innerHTML = ""
		}
		if(parseInt(resultado.percentage) >= 99){
			document.getElementById("foto").src="./img/"
			document.getElementById("r").innerHTML = ""
		}
		document.getElementById("foto").style = "width: 8%"
		document.getElementById("foto").classList += "transition-img"
		}
		
	});

	document.getElementById ("buto").addEventListener ("click", function(){
		let n1 = document.getElementById("n1").value
		let n2 = document.getElementById("n2").value
	

xhr.open('GET', 'https://mma-api1.p.rapidapi.com/player-profile?fighterId=4276994');
xhr.setRequestHeader('x-rapidapi-key', '030901208fmshda6df7bf4720945p199879jsn58fd0ea69569');
xhr.setRequestHeader('x-rapidapi-host', 'mma-api1.p.rapidapi.com');

xhr.send(data);
	})