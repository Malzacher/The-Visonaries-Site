console.log("Hi am i working")

function rotateText() {
    const textArray = ['Skyrocket', 'Grow', 'Succeed', 'Innovate', 'Achieve', 'Excel', 'Thrive', 'Prosper', 'Win', 'Dominate', 'Lead', 'Inspire', 'Motivate', 'Empower', 'Transform', 'Evolve', 'Progress', 'Develop', 'Improve'];
    let currentIndex = 0; 
  
    // get the element to rotate
    const rotateElement = document.getElementById('rotate');
  
    // set initial text
    rotateElement.innerText = textArray[currentIndex];
  
    setInterval(() => {
      // increment index or loop back to beginning of array
      currentIndex = (currentIndex + 1) % textArray.length;
  
      // set new text
      rotateElement.innerText = textArray[currentIndex];
    }, 5000); // change text every 5 seconds (5000 milliseconds)
  }
  
  window.onload = rotateText;