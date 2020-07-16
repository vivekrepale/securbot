const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

const options = {
	auth: {
		api_user: "siddhartenterprises1234@gmail.com",
		api_key: "Siddharth@9897",
	},
};

const client = nodemailer.createTransport(sgTransport(options));

const email = {
	from: "siddharthenterprises1234@gmail.com",
	to: "vivekrepale@gmail,.com",
	subject: "hello there",
	text: "I am being sent from sendgrid",
};

exports.handler = function (event, context, callback) {
	client
		.sendMail(email)
		.then(() => callback(null, { statusCode: 200, message: "Email sent" }))
		.catch((err) => callback(err, null));
};
