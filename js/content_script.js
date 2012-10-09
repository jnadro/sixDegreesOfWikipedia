$(document).ready(function () {
	var myvar = localStorage.var;
	if (myvar) {
		$("body").append('<div id="research_trail_popup"></div>');
		$("#research_trail_popup").html('<ul class="breadcrumb" id="research_trail"></ul>');
		$("#research_trail").append('<li><a href="#">' + myvar + '</a> <span class="divider">/</span></li>');
		$("#research_trail").append('<li><a href="#">Library</a> <span class="divider">/</span></li>');
		$("#research_trail").append('<li class="active">Data</li>');
	}

	localStorage["var"] = "fuck yeah!";
});