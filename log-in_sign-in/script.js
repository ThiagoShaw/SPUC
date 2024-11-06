// Seleção de formulários
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Função para manipular o login
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentNumber = document.getElementById("studentNumber").value;
    const password = document.getElementById("password").value;

    // Simulação de um usuário registrado no localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Verificação simples de autenticação
    if (
      storedUser &&
      storedUser.studentNumber === studentNumber &&
      storedUser.password === password
    ) {
      alert("Login bem-sucedido! Bem-vindo(a) ao Spuc.");
      // Redirecionamento para a página inicial
      window.location.href = "../home_page/home.html";
    } else {
      alert("Número do estudante ou senha incorretos.");
    }
  });
}

// Função para manipular o cadastro
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulação de salvar o usuário no localStorage
    const user = {
      studentNumber: email,
      password: password,
    };

    // Armazena o usuário no localStorage
    localStorage.setItem("user", JSON.stringify(user));
    alert("Cadastro bem-sucedido! Agora você pode fazer login.");
    // Redirecionamento para a página de login
    window.location.href = "login.html";
  });
}
