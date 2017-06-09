var API_URL = "https://www.googleapis.com/youtube/v3/search";

var RESULT_TEMPLATE = (
	'<div class="col-4 result">' +
		'<a href="">' +
			'<img src="" alt=""/>' +
			'<h2></h2>' +
		'</a>' +
	'</div>'
);

function listenSubmit() {
	// Listen to the Submit button
	$('.js-submit').click(function(e) {
		e.preventDefault();
		var searchTerm = $('.js-query').val();
		// Pass into AJAX call function
		getVideos(searchTerm, renderVideo);
		// When clicked, clear out input
		$('.js-query').val("");
	})
}

function getVideos(query, callback) {
	// Send AJAX call with query
	$.ajax({
		url: API_URL,
		data: {
			part: "snippet",
			key: config.API_KEY,
			q: query
		},
		success: callback
	})
}

function renderVideo(result) {
	console.log('pew!');
	var template = $(RESULT_TEMPLATE);
	// Find each part of the template, and replace text and attributes accordingly.
	// Return & spit out the template variable
}

function appendResults(data) {
	// .map through data.items
		// Run the renderVideo function for each item, with map method.
	// Append the results to js-results
}

$(listenSubmit);

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