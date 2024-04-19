function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    
    var messageElement = document.createElement("div");
    messageElement.textContent = userInput;
    chatBox.appendChild(messageElement);
    
    // Limpa o campo de entrada após o envio
    document.getElementById("user-input").value = "";
  }
  
  function addMedia() {
    var mediaInput = document.getElementById("media-input");
    var mediaFile = mediaInput.files[0];
  
    if (mediaFile) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var mediaElement = document.createElement("img");
        mediaElement.src = e.target.result;
        mediaElement.classList.add("media");
        document.body.appendChild(mediaElement);
      };
      reader.readAsDataURL(mediaFile);
    } else {
      alert("Nenhum arquivo selecionado.");
    }
  }
  

  let videoStream;
let videoElement = document.getElementById('camera-feed');
let canvasElement = document.getElementById('canvas');
let imageElement = document.getElementById('captured-image');

async function openCamera() {
    try {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = videoStream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
}

function captureImage() {
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    canvasElement.getContext('2d').drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
    imageElement.src = canvasElement.toDataURL('image/png');
    imageElement.style.display = 'block';
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    
    var messageElement = document.createElement("div");
    messageElement.textContent = userInput;
    chatBox.appendChild(messageElement);
    
    // Limpa o campo de entrada após o envio
    document.getElementById("user-input").value = "";
}
