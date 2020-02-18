$(document).ready(function() {
	app.dataTable();
});

function deleteTigger(url) {
	app.deleteFromDataBase(url);
}
