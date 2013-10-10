(function(){
	document.onkeydown=function(event) {
		 var googleAddress='https://www.google.com/';
		 event = event || window.event;
		 var e = event.keyCode;
		 if (e==65 /*'a'*/ && event.altKey){
			 selectedText=window.getSelection().toString();
			 selectedText=selectedText.replace(/(?:[^a-zA-Z0-9])+/gm,'+');
			 //remove + from the begin of the string
			 if(selectedText[0]=='+'){
				 selectedText=selectedText.substring(1);
			 }
			 
			//remove + from the end of the string
			 if(selectedText[selectedText.length]=='+'){
				 selectedText=selectedText.substring(0,selectedText.length-2);
			 }
			 
			 if(selectedText.length!=0){
				 if(selectedText.length>50){
					 selectedText=selectedText.substring(0,50);
				 }
				 //chrome.tabs.create({"url":googleAddress+"#q="+selectedText,"selected":true},null);
				 window.open(googleAddress+"#q="+selectedText);
				 /*
				 chrome.runtime.sendMessage({
						sender : document.url,
						msg : "normalSearch",
						text: selectedText
					}, null);
				*/
		 	}
		} 
	};
})();