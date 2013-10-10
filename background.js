
var googleAddress='https://www.google.com/';

function initialize(){
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			switch(request.msg){
			case "normalSearch":
-				chrome.tabs.create({'url':googleAddress+"#q="request.text});
				break;
			default:
				break;
			}
	});
	
	
}

(function (){
	window.addEventListener("DOMContentLoaded", function() {
        initialize();
    }, false);
})();
