const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://mma-stats.p.rapidapi.com/November_16_2024');
xhr.setRequestHeader('x-rapidapi-key', '030901208fmshda6df7bf4720945p199879jsn58fd0ea69569');
xhr.setRequestHeader('x-rapidapi-host', 'mma-stats.p.rapidapi.com');

xhr.send(data);