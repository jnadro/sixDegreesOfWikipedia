chrome.webRequest.onResponseStarted.addListener(function(object) {
	//If this a request to the main frame
	if (object.type == "main_frame") {
		
		//If we have not created local storage for this set of breadcrumbs.
		if (!localStorage[object.tabId]) {
			//Create a new one.
			localStorage[object.tabId] = JSON.stringify([]);
		}

		//Get the breadcrumbs out of local storage.
		breadcrumbs = JSON.parse(localStorage[object.tabId]);

		//Take the following ...
		//http://en.wikipedia.org/wiki/Minimum_viable_product
		//and end up with...
		//Minimum viable product
		var splitURL = object.url.split('/');
		var wikiTitle = splitURL[splitURL.length - 1].replace('_', ' ');

		breadcrumbs.push([{url: object.url}, {title: wikiTitle}]);

		//Save current breadcrumbs to local storage.
		localStorage[object.tabId] = JSON.stringify(breadcrumbs);
	}
},
//Filters
{
urls: [
  "http://*.wikipedia.org/*",
]
});

chrome.extension.onMessage.addListener(function(request,sender,sendResponse) {

	if (request.message == "breadcrumbs") {
		console.log(JSON.parse(localStorage[sender.tab.id]));
		sendResponse(JSON.parse(localStorage[sender.tab.id]));
	}
});