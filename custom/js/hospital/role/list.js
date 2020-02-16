var roleList = null;

$(document).ready(function() {
	roleList = $("#role-list").DataTable({
		processing: true,
		serverSide: true,
		ajax: {
			url: roleDataURL,
			type: "GET"
		},
		columnDefs: [
			{
				targets: [-1],
				orderable: false
			}
		],
		lengthMenu: [
			[10, 25, 50, 75, 100, -1],
			[10, 25, 50, 75, 100, "All"]
		]
	});
});

function deleteTigger(url) {
	app.deleteFromDataBase(url);
}
