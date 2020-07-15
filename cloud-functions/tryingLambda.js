exports.handler = function (event, context, callback) {
	callback(null, {
		statusCode: 200,
		body: "Reply from netlify lambda function!",
	});
};
