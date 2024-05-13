// front 
function previewPhoto(event) {
    var reader = new FileReader();
    reader.onload = function(){
        var preview = document.getElementById('preview');
        var image = document.createElement('img');
        image.src = reader.result;
        preview.innerHTML = '';
        preview.appendChild(image);
    }
    reader.readAsDataURL(event.target.files[0]);
}

function submitForm() {
    var safe = true; 
    var messageBox = document.getElementById('messageBox');
    if (safe) {
        messageBox.textContent = "This image is safe for work!";
        messageBox.style.color = "green";
    } else {
        messageBox.textContent = "This image is NOT safe for work!";
        messageBox.style.color = "red";
    }
    messageBox.style.display = "block";
}

// back end //
