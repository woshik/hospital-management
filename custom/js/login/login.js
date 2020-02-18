"use strict";

var success = function(res) {
	if (res.success === true) {
		window.location = res.message;
	} else {
		$("#server-message")
			.html(
				'<div class="alert alert-warning" role="alert">' +
					res.message +
					"</div>"
			)
			.fadeIn(1000);
		this.clearMessage("#message");
	}
};

$(document).ready(function() {
	app.submitOnServer(success);
	app.clearMessage("#flashMessage");
});
