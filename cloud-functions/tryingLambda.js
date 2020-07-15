exports.handler = function (event, context, callback) {
	callback(null, {
		let body;	
		if(event.body){
			body = JSON.parse(event.body);
		}else{
			body = {}
		}

		statusCode: 200,
		body: body
	});
};
