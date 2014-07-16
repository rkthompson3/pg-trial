function capturePhoto(){
    navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});
}

function uploadPhoto(data){
// this is where you would send the image file to server

    document.getElementById('cameraPic').setAttribute('src', data);
	//cameraPic.src = "data:image/jpeg;base64," + data;
	// Successful upload to the server

    //alert("got it " + data);
    document.getElementById('enhanceImageButton').setAttribute('style', 'display:inline-block;');
}