function showName() {
    var checkedValue = "";
    var radios = document.getElementsByName("choice");
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checkedValue = i+1;
        }
    }
    
    var nameInput = document.getElementById("nameInput");
    alert(nameInput.value + " " + checkedValue);
}

function capturePhoto(){
    navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});
}

function uploadPhoto(data){
// this is where you would send the image file to server

    document.getElementById('cameraPic').setAttribute('src', 'data:image/jpeg;base64,' + data);
	//cameraPic.src = "data:image/jpeg;base64," + data;
	// Successful upload to the server
	navigator.notification.alert(
		'Your Photo has been uploaded',  // message
		okay,                           // callback
	    'Photo Uploaded',              // title
	    'OK'                          // buttonName
	);

	// upload has failed Fail

	/* 

	if (failedToUpload){

	navigator.notification.alert(
		'Your Photo has failed to upload',
		failedDismissed,
	    'Photo Not Uploaded',
	    'OK'
		);

	} 
	*/


}

function okay(){
	// Do something
}