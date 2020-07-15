exports.handler = function (event, context, callback) {
	let body;
	if (event.body) {
		body = JSON.parse(event.body);
	} else {
		body = {};
	}

	callback(null, {
		statusCode: 200,
		body: body,
	});
};
