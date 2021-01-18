async function playVideo() {
  try {
        const constraints = {'video': true, 'audio': true};
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
  } catch (e) {
    console.error('Error opening video camera.', error);
  }
}
playVideo()
