let idInput = document.getElementById('idContract');
let btnSaveIdentity = document.getElementById('btnSaveIdentity');


  chrome.storage.sync.get('idContract', function(data) {
	  console.log(data);
		idInput.value =  data.idContract;
  });
  
  btnSaveIdentity.onclick = function(element) {
	//Apply the contract id to the current session in the application  
	  
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
			
          tabs[0].id,
          {code: 'if(document.getElementById("registerButton")){document.getElementById("RegisterForm").appendChild(document.createElement("p").appendChild(document.createTextNode("Blockchain identity applied! - '+idInput.value+'"))); document.getElementById("RegisterForm").setAttribute("style", "color:red")}'}
			
		  );
		  
    });
  };