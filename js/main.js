$( document ).ready(function() {
	document.getElementById('file').addEventListener('change', readFile, false);

	function readFile(evt) {
		var files = evt.target.files;
		var file = files[0];
		var reader = new FileReader();
		reader.onload = function (event) {
			console.log(event.target.result);
		}
		reader.readAsText(file)
	}
});