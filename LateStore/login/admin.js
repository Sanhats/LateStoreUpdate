function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Verifica si el nombre de usuario y la contraseña son correctos
    if (username === 'admin' && password === '123') {
      alert('Inicio de sesión exitoso');
      // Redirige a tu archivo HTML deseado
      window.location.href = '/index/admin.html';
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }