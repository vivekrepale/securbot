exports.handler = function (event, context, callback) {
	let body;
	if (event.body) {
		body = JSON.parse(event.body);
	} else {
		body = {};
	}
	const name = event.body.name;
	const email = event.body.email;

	callback(null, {
		statusCode: 200,
		body: {
			name: name,
			email: email,
		},
	});
};
