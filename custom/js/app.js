function App() {
	this.timeOut = null;
	this.submitButton = null;
	this.submitButtonText = null;
	this.form = null;
}

App.prototype.beforeRequest = function() {
	this.submitButton
		.text(this.submitButtonText + "...")
		.append(
			'<img src="/images/icons/loading.svg" alt="loading" style="margin-left:10px">'
		)
		.attr("disabled", "disabled")
		.css("cursor", "no-drop");
};

App.prototype.requestComplete = function(jqXHR, textStatus) {
	if (textStatus === "success") {
		this.submitButton
			.removeAttr("disabled")
			.css("cursor", "")
			.text(this.submitButtonText)
			.children()
			.remove();
	}
};

App.prototype.addORUpdateRequestSuccess = function(res) {
	if (res.success) {
		$("#server-message")
			.html(
				'<div class="alert alert-success" role="alert">' +
					res.info +
					"</div>"
			)
			.fadeIn(1000);
		if (!this.form.attr("action").match(/update/gi)) {
			this.form[0].reset();
		}
	} else {
		$("#server-message")
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
	}

	this.clearMessage("#server-message");
};

App.prototype.addORUpdateToDataBase = function(onSuccess) {
	onSuccess = onSuccess ? onSuccess : this.addORUpdateRequestSuccess;
	var self = this;
	this.onSubmitButtonClick();
	$("#addORUpdateToDataBase")
		.unbind("submit")
		.bind("submit", function(e) {
			$("#server-message").fadeOut(0);
			e.preventDefault();
			self.form = $(this);
			$.ajax({
				url: self.form.attr("action"),
				type: self.form.attr("method"),
				headers: {
					"CSRF-Token": document
						.querySelector('meta[name="csrf-token"]')
						.getAttribute("content")
				},
				data: self.form.serialize(),
				dataType: "json",
				beforeSend: self.beforeRequest.bind(self),
				success: onSuccess.bind(self),
				complete: self.requestComplete.bind(self)
			});
		});
};

App.prototype.deleteFromDataBase = function(url, onSuccess) {
	onSuccess = onSuccess ? onSuccess : this.deleteRequestSuccess;
	this.onSubmitButtonClick();
	this.submitButton.unbind("click").bind(
		"click",
		function(e) {
			$("#server-message").fadeOut(0);
			e.preventDefault();
			$.ajax({
				url: url,
				type: "post",
				headers: {
					"CSRF-Token": document
						.querySelector('meta[name="csrf-token"]')
						.getAttribute("content")
				},
				dataType: "json",
				beforeSend: this.beforeRequest.bind(this),
				success: onSuccess.bind(this),
				complete: this.requestComplete.bind(this)
			});
		}.bind(this)
	);
};

App.prototype.deleteRequestSuccess = function(res) {
	if (res.success) {
		$("#server-message")
			.html(
				'<div class="alert alert-success" role="alert">' +
					res.info +
					"</div>"
			)
			.fadeIn(1000);
		roleList.ajax.reload(null, false);
		$("#deleteRoleModal").modal("hide");
	} else {
		$("#server-message")
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
	}

	this.clearMessage("#server-message");
};

App.prototype.onSubmitButtonClick = function() {
	this.submitButton = $("#submitButtonClick");
	this.submitButtonText = this.submitButton.text().trim();
};

App.prototype.clearMessage = function(id) {
	clearTimeout(this.timeOut);
	this.timeOut = setTimeout(function() {
		$(id).fadeOut(1000);
	}, 5000);
};

var app = new App();
