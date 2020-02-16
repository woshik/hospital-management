"use strict";

$(document).ready(function() {
	$("#message").fadeOut(0);
	button = $("#buttonload"),
	btnText = button.text().trim();
	$("#loginForm").unbind("submit").bind("submit", function(e) {
		e.preventDefault();
		var form = $(this);

		$.ajax({
			url: form.attr("action"),
			type: form.attr("method"),
			headers: {
				"CSRF-Token": document
					.querySelector('meta[name="csrf-token"]')
					.getAttribute("content")
			},
			data: form.serialize(),
			dataType: "json",
			beforeSend: beforeRequest,
			success: function success(res) {
				if (res.success === true) {
					window.location = res.message;
				} else {
					$("#message")
						.html(
							'<div class="alert alert-warning" role="alert">' +
								res.message +
								"</div>"
						)
						.fadeIn(1000);
					clearMessage("#message");
				}
			},
			complete: requestComplete
		});
	});

	clearMessage("#message");
});
