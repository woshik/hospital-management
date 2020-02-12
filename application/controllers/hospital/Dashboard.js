const Joi = require("@hapi/joi");
const web = require(join(BASE_DIR, "urlconf", "webRule"));
const { fromErrorMessage } = require(join(
    BASE_DIR,
    "core",
    "util"
));

exports.dashboardView = (req, res, next) => {
    res.render("hospital/base-template", {
        info: appInfo,
        title: "Dasboard",
        csrfToken: req.csrfToken(),
	});
}