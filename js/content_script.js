$(document).ready(function () {
	var breadcrumbs = [];

	var wikipediaTitle = document.title.split("-")[0];

	if (localStorage['breadcrumbs']) {
		breadcrumbs = JSON.parse(localStorage['breadcrumbs']);
	}
	else {
		breadcrumbs.push(wikipediaTitle);
	}
	
	if (breadcrumbs) {
		$("body").append('<div id="research_trail_popup"></div>');
		$("#research_trail_popup").html('<ul class="breadcrumb" id="research_trail"></ul>');

		breadcrumbs.forEach(function(element, index) {
			$("#research_trail").append('<li><a href="#">' + element + '</a> <span class="divider">/</span></li>');
		});
		$("#research_trail_popup").append('<button class="btn btn-mini" id="clear" type="button">Clear</button>');
		$("#clear").click(function() {
			localStorage.clear();
		});
	}

	breadcrumbs.push(wikipediaTitle);
	localStorage["breadcrumbs"] = JSON.stringify(breadcrumbs);
});