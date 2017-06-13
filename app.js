var API_URL = "https://www.googleapis.com/youtube/v3/search";
var YOUTUBE_LINK = "https://www.youtube.com/watch?v=";

var RESULT_TEMPLATE = (
	'<div class="col-4 result">' +
		'<a href="" target="_blank">' +
			'<img src="" alt=""/>' +
			'<h2></h2>' +
		'</a>' +
	'</div>'
);

var row = null;

function listenSubmit() {
	// Listen to enter and trigger click
	$('.js-query').keyup(function(e) {
		if(e.keyCode == 13) {
			$('.js-submit').click();
		}
	})
	// Listen to the Submit button
	$('.js-submit').click(function(e) {
		e.preventDefault();
		var searchTerm = $('.js-query').val();
		// Pass into AJAX call function
		getVideos(searchTerm, appendResults);
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
			maxResults: 6,
			q: query
		},
		success: callback
	})
}

function renderVideo(result, index) {
	var template = $(RESULT_TEMPLATE);

	if (index % 3 == 0) {
		row = $('<div class="row">');
		$('.js-results').append(row);
	}
	// Find each part of the template, and replace text and attributes accordingly.
	template.find("a").attr('href', YOUTUBE_LINK + result.id.videoId);
	template.find("img").attr('src', result.snippet.thumbnails.medium.url);
	template.find("h2").text(result.snippet.title);
	row.append(template);
}

function appendResults(data) {
	// .map through data.items
	var results = data.items.forEach(function(item, index) {
		return renderVideo(item, index);
	});
	// Append the results to js-results
	// $('.js-results').html(results);
}

$(listenSubmit);