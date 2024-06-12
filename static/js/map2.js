const examples = [
    {
      img: "/Users/likithp/Video_Indexing/data/img1.png",
      video: "/Users/likithp/Video_Indexing/data/vid1.mp4",
      mapping: function(sliderValue){
        if (sliderValue <= 100) return 0;  // First interval
        else if (sliderValue <= 200) return 5;  // Second interval
        else if (sliderValue <= 300) return 10;  // Third interval
        else if (sliderValue <= 400) return 15;  // Fourth interval
        else if (sliderValue <= 500) return 20;  // Fifth interval
        else if (sliderValue <= 600) return 25;  // Sixth interval
        // Continue adding more intervals as needed
        else if (sliderValue <= 700) return 30;
        else if (sliderValue <= 800) return 35;
        else if (sliderValue <= 900) return 40;
        else if (sliderValue <= 1000) return 45;
        else if (sliderValue <= 1100) return 50;
        else if (sliderValue <= 1200) return 55;
        else if (sliderValue <= 1300) return 60;
        else if (sliderValue <= 1400) return 65;
        else if (sliderValue <= 1500) return 70;
        else if (sliderValue <= 1600) return 75;
        else if (sliderValue <= 1700) return 80;
        else if (sliderValue <= 1800) return 85;
        else if (sliderValue <= 1900) return 90;
        else if (sliderValue <= 2000) return 95;
        else if (sliderValue <= 2100) return 100;
        else if (sliderValue <= 2200) return 105;
        else if (sliderValue <= 2300) return 110;
        else if (sliderValue <= 2400) return 115;
        else if (sliderValue <= 2500) return 120;
        else if (sliderValue <= 2600) return 125;
        else if (sliderValue <= 2700) return 130;
        else if (sliderValue <= 2800) return 135;
        else if (sliderValue <= 2900) return 140;
        else if (sliderValue <= 3000) return 145;
        else if (sliderValue <= 3080) return 150;  // Last specified interval
        else return 155;  // Beyond the last interval, if needed
      }
    },
    {
      img: "/Users/likithp/Video_Indexing/data/img2.png",
      video: "/Users/likithp/Video_Indexing/data/vid2.mp4",
      mapping: function(sliderValue){
        if (sliderValue <= 100) return 0;  // First interval
        else if (sliderValue <= 200) return 5;  // Second interval
        else if (sliderValue <= 300) return 10;  // Third interval
        else if (sliderValue <= 400) return 15;  // Fourth interval
        else if (sliderValue <= 500) return 20;  // Fifth interval
        else if (sliderValue <= 600) return 25;  // Sixth interval
        // Continue adding more intervals as needed
        else if (sliderValue <= 700) return 30;
        else if (sliderValue <= 800) return 35;
        else if (sliderValue <= 900) return 40;
        else if (sliderValue <= 1000) return 45;
        else if (sliderValue <= 1100) return 50;
        else if (sliderValue <= 1200) return 55;
        else if (sliderValue <= 1300) return 60;
        else if (sliderValue <= 1400) return 65;
        else if (sliderValue <= 1500) return 70;
        else if (sliderValue <= 1600) return 75;
        else if (sliderValue <= 1700) return 80;
        else if (sliderValue <= 1800) return 85;
        else if (sliderValue <= 1900) return 90;
        else if (sliderValue <= 2000) return 95;
        else if (sliderValue <= 2100) return 100;
        else if (sliderValue <= 2200) return 105;
        else if (sliderValue <= 2300) return 110;
        else if (sliderValue <= 2400) return 115;
        else if (sliderValue <= 2500) return 120;
        else if (sliderValue <= 2600) return 125;
        else if (sliderValue <= 2700) return 130;
        else if (sliderValue <= 2800) return 135;
        else if (sliderValue <= 2900) return 140;
        else if (sliderValue <= 3000) return 145;
        else if (sliderValue <= 3080) return 150;  // Last specified interval
        else return 155;  // Beyond the last interval, if needed
      }
    },
    {
      img: "/Users/likithp/Video_Indexing/data/img3.png",
      video: "/Users/likithp/Video_Indexing/data/vid3.mp4",
      mapping: function(sliderValue){
        if (sliderValue <= 100) return 0;  // First interval
        else if (sliderValue <= 200) return 5;  // Second interval
        else if (sliderValue <= 300) return 10;  // Third interval
        else if (sliderValue <= 400) return 15;  // Fourth interval
        else if (sliderValue <= 500) return 20;  // Fifth interval
        else if (sliderValue <= 600) return 25;  // Sixth interval
        // Continue adding more intervals as needed
        else if (sliderValue <= 700) return 30;
        else if (sliderValue <= 800) return 35;
        else if (sliderValue <= 900) return 40;
        else if (sliderValue <= 1000) return 45;
        else if (sliderValue <= 1100) return 50;
        else if (sliderValue <= 1200) return 55;
        else if (sliderValue <= 1300) return 60;
        else if (sliderValue <= 1400) return 65;
        else if (sliderValue <= 1500) return 70;
        else if (sliderValue <= 1600) return 75;
        else if (sliderValue <= 1700) return 80;
        else if (sliderValue <= 1800) return 85;
        else if (sliderValue <= 1900) return 90;
        else if (sliderValue <= 2000) return 95;
        else if (sliderValue <= 2100) return 100;
        else if (sliderValue <= 2200) return 105;
        else if (sliderValue <= 2300) return 110;
        else if (sliderValue <= 2400) return 115;
        else if (sliderValue <= 2500) return 120;
        else if (sliderValue <= 2600) return 125;
        else if (sliderValue <= 2700) return 130;
        else if (sliderValue <= 2800) return 135;
        else if (sliderValue <= 2900) return 140;
        else if (sliderValue <= 3000) return 145;
        else if (sliderValue <= 3080) return 150;  // Last specified interval
        else return 155;  // Beyond the last interval, if needed
      }
    },
    {
      img: "/Users/likithp/Video_Indexing/data/img4.png",
      video: "/Users/likithp/Video_Indexing/data/vid4.mp4",
      mapping: function(sliderValue){
        if (sliderValue <= 100) return 0;  // First interval
        else if (sliderValue <= 200) return 5;  // Second interval
        else if (sliderValue <= 300) return 10;  // Third interval
        else if (sliderValue <= 400) return 15;  // Fourth interval
        else if (sliderValue <= 500) return 20;  // Fifth interval
        else if (sliderValue <= 600) return 25;  // Sixth interval
        // Continue adding more intervals as needed
        else if (sliderValue <= 700) return 30;
        else if (sliderValue <= 800) return 35;
        else if (sliderValue <= 900) return 40;
        else if (sliderValue <= 1000) return 45;
        else if (sliderValue <= 1100) return 50;
        else if (sliderValue <= 1200) return 55;
        else if (sliderValue <= 1300) return 60;
        else if (sliderValue <= 1400) return 65;
        else if (sliderValue <= 1500) return 70;
        else if (sliderValue <= 1600) return 75;
        else if (sliderValue <= 1700) return 80;
        else if (sliderValue <= 1800) return 85;
        else if (sliderValue <= 1900) return 90;
        else if (sliderValue <= 2000) return 95;
        else if (sliderValue <= 2100) return 100;
        else if (sliderValue <= 2200) return 105; // Last specified interval
        else return 155;  // Beyond the last interval, if needed
      }
    }
  ];
  
  let currentExampleIndex = 0; // Keeps track of the current example
  
  document.getElementById('frameSlider').addEventListener('input', function() {
    const maxSliderValue = parseInt(this.max); // Get the max value of the slider
    const sliderValue = maxSliderValue - this.value; // Reverse the value
  
    const video = document.getElementById('videoFrame');
    const frameNumber = examples[currentExampleIndex].mapping(sliderValue);
    const frameTime = frameNumberToTime(frameNumber);
    video.currentTime = frameTime;
  });
  
  function nextExample() {
    currentExampleIndex++;
    if (currentExampleIndex >= examples.length) {
      currentExampleIndex = 0; // Loop back to the first example if over limit
    }
  
    const sceneImage = document.getElementById('sceneImage');
    const videoElement = document.getElementById('videoFrame');
    const videoSource = videoElement.querySelector('source');
  
    // Smooth transition effect
    sceneImage.style.opacity = 0;
    videoElement.style.opacity = 0;
  

    container.style.transform = 'translateX(-100%)';

  setTimeout(() => {
    // Update the image and video elements
    sceneImage.src = examples[currentExampleIndex].img;
    videoSource.src = examples[currentExampleIndex].video;
    videoElement.load(); // Reload the video element to apply new source

    // Reset the slider
    document.getElementById('frameSlider').value = 0;

    // Slide in
    container.style.transform = 'translateX(100%)';

    setTimeout(() => {
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
      setTimeout(() => {
        container.style.transition = 'transform 0.5s ease-in-out';
      }, 50); // Allow time for transition property to reset
    }, 500); // Matches the transition duration
  }, 500); // Matches the transition duration
}

//     setTimeout(() => {
//       sceneImage.src = examples[currentExampleIndex].img;
//       videoSource.src = examples[currentExampleIndex].video;
//       videoElement.load(); // Reload the video element to apply new source
  
//       // Reset the slider
//       document.getElementById('frameSlider').value = 0;
  
//       // Fade in the new content
//       sceneImage.style.opacity = 1;
//       videoElement.style.opacity = 1;
//     }, 500); // Matches the transition duration
//   }
  
  function frameNumberToTime(frameNumber) {
    const fps = 24; // Change based on your video frame rate
    return frameNumber / fps;
  }
  