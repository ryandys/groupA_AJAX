(function() {
	var httpRequest,
		ajaxText = document.querySelector('.placeholder'),
		ajaxButton = document.querySelector('wrapper');
		
	function makeRequest(url) {
		httpRequest = new XMLHttpRequest();
		
		if (!httpRequest) {
			console.log('Giving up, can\'t use AJAX.');
			return false;
		}
		
		httpRequest.onreadystatechange = showResults;
		httpRequest.open('GET', url);
		httpRequest.send();
	}
	
	function showResults() {
		if(httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200) {
				var response = httpRequest.responseText;
				ajaxText.innerHTML = response;
			} else {
				console.log('There was an error with your request');
			}
		}
	}
		
	ajaxButton.addEventListener('click', function() { makeRequest('text.txt'); }, false);
})();