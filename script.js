
/*Script for small navagation bar */
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () =>{
    navbarlinks.classList.toggle('active')
})

/*Script for video gallery*/
var videoPlayer = document.getElementById("videoPlayer");
                var showingVideo = document.getElementById("showing-video");

                function stopVideo()
                {
                    showingVideo.pause();
                    videoPlayer.style.display = "none";
                }

                function playVideo(file)
                {
                    showingVideo.src = file;
                    videoPlayer.style.display = "block";
                }