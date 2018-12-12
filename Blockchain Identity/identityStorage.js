chrome.runtime.onInstalled.addListener(function() {
	var contractAddress = "0x193e4bf88e2bb09f51f6b34febf74f34dd648eb9"
    chrome.storage.sync.set({idContract: contractAddress}, function() {
      console.log("Contract address is set to "+ contractAddress);
    });
	
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'habitatcommerce9.xcentium.net'}
        }),
		new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'sxa.storefront.com'}
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
	
});
