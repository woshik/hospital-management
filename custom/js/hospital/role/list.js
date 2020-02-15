$(document).ready(function() {
	$("#role-list").DataTable({
		processing: true,
		serverSide: true,
		ajax: {
			url: roleDataURL,
			type: "GET"
		},

		lengthMenu: [
			[5, 10, 25, 50, 75, 100, -1],
			[5, 10, 25, 50, 75, 100, "All"]
		]
	});
});
