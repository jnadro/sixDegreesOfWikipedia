$(document).ready(function () {
	var breadcrumbs = [];

	// Takes the following...
	// Apple Inc. - Wikipedia, the free encyclopedia
	// ...and makes...
	// Apple Inc.
	var wikipediaTitle = document.title.split("-")[0];

	// If there is already breadcrumbs saved.
	if (localStorage['breadcrumbs']) {
		breadcrumbs = JSON.parse(localStorage['breadcrumbs']);
	}

	// Save the current page to the breadcrumbs
	breadcrumbs.push([{url: document.URL}, {title: wikipediaTitle}]);
	
	// Add the popup to the current page.
	$("body").append('<div id="research_trail_popup"></div>');
	// Add the Bootstrap breadcrumbs to the popup.
	$("#research_trail_popup").html('<ul class="breadcrumb" id="research_trail"></ul>');

	// Add a item to the list of breadcrumbs.
	breadcrumbs.forEach(function(breadcrumb, index) {
		$("#research_trail").append('<li id=' + index + '><a href="' + breadcrumb[0].url + '">' + breadcrumb[1].title + '</a> <span class="divider">/</span></li>');
	});

	// Mark the last breadcrumb as active.
	$("li").last().addClass("active");

	// Add a clear button to clear the local storage and breadcrumbs.
	$("#research_trail_popup").append('<button class="btn btn-mini" id="clear" type="button">Clear</button>');
	$("#clear").click(function() {
		localStorage.clear();
	});

	//Save current breadcrumbs to local storage.
	localStorage["breadcrumbs"] = JSON.stringify(breadcrumbs);
});