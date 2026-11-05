let btn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

btn.addEventListener("click", function() {
  menu.classList.toggle("show");
  console.log("Burger clicked, menu opened / closed");
});

let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
  console.log("Theme changed");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light";
  } else {
    themeBtn.textContent = "🌙 Dark";
  }
});


function goToContact() {
  console.log("Say hello clicked, go to contact");
  document.getElementById("contact").scrollIntoView();
}


let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // не перезагружать страницу
  let name = document.getElementById("name").value;
  console.log("Form sent by: " + name);
  document.getElementById("thanks").textContent = "Thank you, " + name + "! I got your message.";
  form.reset();
});

console.log("Site loaded, JS is working");