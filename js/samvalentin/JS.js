document.addEventListener("DOMContentLoaded", function() {
    var fotos = ["sam1.png", "sam2.png", "sam4.png", "sam5.png", "sam6.png", "sam7.png", "sam8.png", "sam9.png", "sam10.png", "sam11.png", "sam12.png"];
    var video = document.getElementById("video");
    var videoContainer = document.getElementById("videoContainer");
    var imgContainer = document.getElementById("imgContainer");
    var playButton = document.getElementById("playButton");
    var foto = document.getElementById("img");
    

    playButton.addEventListener("click", function() {
        var numFotoActual = Math.floor(Math.random() * 11);
        if (video.paused) {
            video.play();
            foto.src = fotos[numFotoActual];
            imgContainer.style.display = "block";
            playButton.style.display = "none";
        } else {
            location.href = "index.html";
        }
        console.log(numFotoActual);
    });

    video.addEventListener("ended", function() {
        videoContainer.style.display = "none";
        imgContainer.style.display = "none";
        playButton.style.display = "block";
    });
});

function aparecerImagen() {
    var imagen = document.getElementById("img");
    imagen.classList.add("aparecer");
}