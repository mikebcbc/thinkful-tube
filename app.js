var API_URL = "https://www.googleapis.com/youtube/v3/search";

var RESULT_TEMPLATE = (
	'<div class="col-4 result">' +
		'<a href="">' +
			'<img src="" alt=""/>' +
			'<h2></h2>' +
		'</a>' +
	'</div>'
);

// $($.ajax({
// 	url: API_URL,
// 	data: {
// 		part: "snippet",
// 		key: config.API_KEY,
// 		q: "trump"
// 	}
// }).done(function(e) {
// 	console.dir(e);
// }))