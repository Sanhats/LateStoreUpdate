// Toggle Form
const container = document.querySelector(".container");
const inputs = document.querySelectorAll(".form-box input[type = 'password']");
const icons = [...document.querySelectorAll(".form-icon")];
const spans = [...document.querySelectorAll(".form-box .top span")];
const section = document.querySelector("section");

spans.map((span) => {
  span.addEventListener("click", (e) => {
    const color = e.target.dataset.id;
    container.classList.toggle("active");
    section.classList.toggle("active");
    document.querySelector(":root").style.setProperty("--custom", color);
  });
});

Array.from(inputs).map((input) => {
  icons.map((icon) => {
    icon.innerHTML = `<img src="./Screenshot_6.jpg" alt="" />`;

    icon.addEventListener("click", () => {
      const type = input.getAttribute("type");
      if (type === "password") {
        input.setAttribute("type", "text");
        icon.innerHTML = `<img src="./images/Screenshot_6.jpg" alt="" />`;
      } else if (type === "text") {
        input.setAttribute("type", "password");
        icon.innerHTML = `<img src="./images/Screenshot_6.jpg" alt="" />`;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    // Recuperar datos del localStorage al cargar la página
    var registeredEmail = localStorage.getItem("registeredEmail") || "";
    var registeredPassword = localStorage.getItem("registeredPassword") || "";
  
    // Llenar los campos de registro con los datos recuperados
    document.getElementById("registeredEmail").value = registeredEmail;
    document.getElementById("registeredPassword").value = registeredPassword;
  
    var registerButton = document.getElementById("registerButton");
    var loginButton = document.getElementById("loginButton");
  
    registerButton.addEventListener("click", function (event) {
      event.preventDefault();
  
      registeredEmail = document.getElementById("registeredEmail").value;
      registeredPassword = document.getElementById("registeredPassword").value;
  
      // Guardar datos en el localStorage
      localStorage.setItem("registeredEmail", registeredEmail);
      localStorage.setItem("registeredPassword", registeredPassword);
  
      alert("Registro exitoso, ahora puedes iniciar sesión");
      container.classList.toggle("active");
      section.classList.toggle("active");
    });
  
    loginButton.addEventListener("click", function (event) {
      event.preventDefault();
  
      var loginEmail = document.getElementById("loginEmail").value;
      var loginPassword = document.getElementById("loginPassword").value;
  
      // Comprobar las credenciales con los datos almacenados en el localStorage
      if (loginEmail === registeredEmail && loginPassword === registeredPassword) {
        alert("Inicio de sesión exitoso");
        window.location.href = "/indexUsuario/user.html";
      } else {
        alert("Correo electrónico o contraseña incorrectos");
      }
    });
  });