"use strict";

var timeOut = null;
$(document).ready(function() {
	$("#hospitalRoleForm")
		.unbind("submit")
		.bind("submit", function(e) {
			$("#hospital-role-message").fadeOut(0);
			e.preventDefault();
			var button = $("#updateInfoBtn"),
				btnText = button.text().trim(),
				form = $(this);
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
				beforeSend: function beforeSend() {
					button
						.text(btnText + "...")
						.append(
							'<img src="/images/icons/loading.svg" alt="loading" style="margin-left:10px">'
						)
						.attr("disabled", "disabled")
						.css("cursor", "no-drop");
				},
				success: function success(res) {
					if (res.success) {
						$("#hospital-role-message")
							.html(
								'<div class="alert alert-success" role="alert">' +
									res.info +
									"</div>"
							)
							.fadeIn(1000);
						form[0].reset();
					} else {
						$("#hospital-role-message")
							.html(
								'<div class="alert alert-warning" role="alert">' +
									res.info +
									"</div>"
							)
							.fadeIn(1000);
						$("html, body").animate(
							{
								scrollTop: 0
							},
							"slow"
						);

						clearMessage("#hospital-role-message");
					}
				},
				complete: function complete(jqXHR, textStatus) {
					if (textStatus === "success") {
						button
							.removeAttr("disabled")
							.css("cursor", "")
							.text(btnText)
							.children()
							.remove();
					}
				}
			});
		});
});

function clearMessage(id) {
	clearTimeout(timeOut);
	timeOut = setTimeout(function() {
		$(id).fadeOut(1000);
	}, 5000);
}
