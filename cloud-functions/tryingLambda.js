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
	from: "siddhartenterprises1234@gmail.com",
	to: "vivekrepale@gmail.com",
	subject: "hello there",
	text: "I am being sent from sendgrid",
};

exports.handler = function (event, context, callback) {
	// .then(() => callback(null, { statusCode: 200, message: "Email sent" }))
	// .catch((err) => callback(err, null));
	try {
		client.sendMail(email);
		console.log("Message sent");
	} catch (err) {
		console.log(err);
	}
};
