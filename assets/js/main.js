const to = "samuelaffah14@gmail.com"; // Replace with the recipient's email address
function sendEmail() {
  const name = document.getElementById("nameContact").value;
  const subject = `Hey I'm ${name}`; // Replace with the subject of the email
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  // Open the user's default email client with the new email composition
  window.location.href = mailtoLink;
}
function submitForm(e) {
  // Prevent the default form submission behavior
  e.preventDefault();
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
s;
