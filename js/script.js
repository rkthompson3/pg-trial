function showName() {
    var checkedValue = "";
    var radios = document.getElementsByName("choice");
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checkedValue = i+1;
        }
    }
    
    var nameInput = document.getElementById("nameInput");
    //alert(nameInput.value + " " + checkedValue);
    
    navigator.camera.getPicture(function(imagePath){
        document.getElementById("photoImg").setAttribute("src", imagePath);
    }, function(){
        alert("Photo cancelled");
    }, {
        destinationType: navigator.camera.DestinationType.FILE_URI
    });
}