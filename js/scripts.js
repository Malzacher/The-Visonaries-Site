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

  function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "malzacher@gmail.com",
      Password: "5AE837F92DD55D21B561805A74948DF7C845",
      To: 'nicholas.malzacher@gmail.com',
      From: 'nicholas.malzacher@gmail.com',
      Subject: "You Got an Email from: " + document.getElementById("email").value,
      Body: "Name: " + document.getElementById("name").value + "<br> Email:" + document.getElementById("email").value + "<br> Subject:" + document.getElementById("subject").value
    }).then(
      message => alert("Mail sent successfully! Thank you for your message!")
    );
  }