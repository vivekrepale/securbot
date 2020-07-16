const nodemailer = require("nodemailer");

// const options = {
// 	auth: {
// 		api_user: "siddhartenterprises1234@gmail.com",
// 		api_key: "Siddharth@9897",
// 	},
// };

// const client = nodemailer.createTransport(sgTransport(options));

// const email = {
// 	from: "siddhartenterprises1234@gmail.com",
// 	to: "vivekrepale@gmail.com",
// 	subject: "hello there",
// 	text: "I am being sent from sendgrid",
// };

// exports.handler = function (event, context, callback) {
// 	client
// 		.sendMail(email)
// 		.then(() => callback(null, { statusCode: 200, message: "Email sent" }))
// 		.catch((err) => callback(err, null));
// };

const sendEmail = aysnc (options) => {

	const transporter = nodemailer.createTransport({
		service: "Gmail",
		auth:{
			user: "siddhartenterprises1234@gmail.com",
			pass: "Siddharth@9897"
		}
	})

	const mailOptions = {
	from: "siddhartenterprises1234@gmail.com",
	to: "vivekrepale@gmail.com",
	subject: "Form data",
	text: "Testing"
	}


	await transporter.sendMail(mailOptions);
};


exports.handler = function (event, context, callback) {
	await sendMail().then(() => callback(null, { statusCode: 200, message: "Email sent" }))
	.catch((err) => callback(err, null))
};