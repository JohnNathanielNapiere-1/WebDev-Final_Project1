let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
};

function sendEmail(name, email, phone, subject, body) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "myusername.sample1@gmail.com",
    Password: "sampleACCOUNT@gmail123",
    To: "johnnathanielnapiere@gmail.com",
    From: email,
    Subject: subject,
    Body: `
      From: ${name} <br>
      Phone Number: ${phone} <br>
      Message: <br> ${body}
    `,
  })
    .then((message) => alert("Message sent successfully: " + message))
    .catch((error) => alert("Failed to send message: " + error));
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!fullName) {
      alert("Please enter your full name.");
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phoneNumber || !/^\d{10,15}$/.test(phoneNumber)) {
      alert("Please enter a valid phone number with 10-15 digits.");
      return;
    }

    if (!subject) {
      alert("Please enter a subject.");
      return;
    }

    if (!message) {
      alert("Please enter your message.");
      return;
    }

    sendEmail(fullName, email, phoneNumber, subject, message);
  });
