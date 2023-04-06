console.log("Hi am i working")

function rotateText() {
    const textArray = ['Skyrocket', 'Grow', 'Succeed', 'Innovate', 'Achieve', 'Excel', 'Thrive', 'Prosper', 'Win', 'Dominate', 'Lead', 'Inspire', 'Motivate', 'Empower', 'Transform', 'Evolve', 'Progress', 'Develop', 'Improve'];
    let currentIndex = 0;
    const rotateElement = document.getElementById('rotate');
    rotateElement.innerText = textArray[currentIndex];
    rotateElement.classList.add('active');

    setInterval(() => {
      currentIndex = (currentIndex + 1) % textArray.length;
      rotateElement.classList.remove('active');
      setTimeout(() => {
        rotateElement.innerText = textArray[currentIndex];
        rotateElement.classList.add('active');
      }, 500);
    }, 5000);
  }

  // call the function when the window loads
  window.onload = rotateText;
