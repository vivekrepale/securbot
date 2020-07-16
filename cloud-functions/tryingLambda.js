exports.handler = function (event, context, callback) {
	const body = JSON.parse(event.body);

	callback(null, {
		statusCode: 200,
		body: body,
	});
};
