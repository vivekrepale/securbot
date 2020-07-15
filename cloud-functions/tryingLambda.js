import Layout from "../app/layout/Layout.js";
const Layout = <Layout />;

exports.handler = function (event, context, callback) {
	let body;
	if (event.body) {
		body = JSON.parse(event.body);
	} else {
		body = {};
	}

	callback(null, {
		statusCode: 200,
		body: Layout,
	});
};
