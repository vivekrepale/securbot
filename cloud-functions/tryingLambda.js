exports.handler = function (event, context, callback) {
	const { name, email } = JSON.parse(event.body);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			msg: "Thanks for visiting " + name + "Your email is " + email,
		}),
	});
};
