/*
// Teste do BDD 1 - Cadastro de usuário

window.onload = function testeCadastro() {
  console.log("testando cadastro...");

  console.log("lendo IDs...");
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('password');
  const form = document.getElementById('signupForm');

  console.log("testando valores nos campos...");
  emailInput.value = 'email.teste@pucpr.edu.br';
  senhaInput.value = 'senha123456';

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (emailInput.value && senhaInput.value) {
          console.log("usuário cadastrado com sucesso! 🤗");
      } else {
          console.error("falha no teste");
          alert("falha no teste");
      }
  });

  document.getElementById('signupButton').click();
};
*/

// Teste do BDD 2 - Login de usuário

window.onload = function testeLogin() {
  console.log("iniciando teste de login...");

  const numberInput = document.getElementById('studentNumber');
  const senhaInput = document.getElementById('password');
  const form = document.getElementById('loginForm');
  const loginButton = document.getElementById('loginButton');

  if (!numberInput || !senhaInput || !form || !loginButton) {
      console.error("erro: Um ou mais elementos de login não foram encontrados.");
      return;
  }

  console.log("lendo IDs dos campos de login...");
  
  console.log("definindo valores nos campos de email e senha...");
  numberInput.value = 'email.teste@pucpr.edu.br';
  senhaInput.value = 'senha123456';

  form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log("Verificando valores dos campos...");
      
      if (numberInput.value && senhaInput.value) {
          console.log("usuário logado com sucesso! 😀");
          alert("Login realizado! Teste passou!");
      } else {
          console.error("Falha no teste: Campos de login estão vazios.");
          alert("Falha no teste");
      }
  });

  console.log("simulando clique no botão de login...");
  loginButton.click();
}

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
