$(document).ready(function () {
	chrome.extension.sendMessage({message: "breadcrumbs"}, function(response) {
		breadcrumbs = response;

		// Add the popup to the current page.
		$("body").append('<div id="research_trail_popup"></div>');
		// Add the Bootstrap breadcrumbs to the popup.
		$("#research_trail_popup").html('<ul class="breadcrumb" id="research_trail"></ul>');

		// Add a item to the list of breadcrumbs.
		breadcrumbs.forEach(function(breadcrumb, index) {
			$("#research_trail").append('<li></li>');

			// If this is the last breadcrumb just add the
			// title.
			if (index == (breadcrumbs.length - 1)) {
				$("li").last().html(breadcrumb[1].title);
			}
			else {
				// Add a link to the breadcrumb along with a divider if we are not the last breadcrumb.
				$("li").last().html('<a href="' + breadcrumb[0].url + '">' + breadcrumb[1].title + '</a> <span class="divider">/</span>');
			}
		});

		// Mark the last breadcrumb as active.
		$("li").last().addClass("active");
	});
});