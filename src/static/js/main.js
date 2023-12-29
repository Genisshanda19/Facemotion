document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video-feed');
    const canvas = document.getElementById('emotion-canvas');
    const context = canvas.getContext('2d');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;

            video.addEventListener('loadeddata', () => {
                
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                
                detectEmotions();
            });
        })
        .catch((error) => console.error('Error accessing webcam:', error));

    function detectEmotions() {
       
    }
});
