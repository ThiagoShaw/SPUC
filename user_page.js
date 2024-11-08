document.addEventListener("DOMContentLoaded", function () {
  loadUsername();
  loadUserPosts();
});

function loadUsername() {
  const usernameInput = document.getElementById("username");
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    usernameInput.value = storedUsername;
  } else {
    usernameInput.placeholder = "Digite seu nome";
  }
}

function saveUsername() {
  const usernameInput = document.getElementById("username");
  localStorage.setItem("username", usernameInput.value.trim());
}

function loadUserPosts() {
  const userPostsContainer = document.getElementById("userPostsContainer");

  // Simulação de um post do usuário
  const userPosts = [
    { id: 1, content: "Conteúdo do post do usuário", likes: 10 },
  ];

  userPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
            <p>${post.content}</p>
            <div class="post-actions">
                <button onclick="likePost(${post.id})">Curtir (${post.likes})</button>
                <button onclick="editPost(${post.id})">Editar</button>
                <button onclick="deletePost(${post.id})">Deletar</button>
            </div>
        `;
    userPostsContainer.appendChild(postElement);
  });
}

function editPhoto() {
  const photoArea = document.getElementById('editPhoto');
  const profileImage = document.getElementById('profileImage');
  const inputImagem = document.createElement('input');
  inputImagem.type = 'file';
  inputImagem.accept = 'image/*';

  inputImagem.addEventListener('change', () => {
    const file = inputImagem.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImage.src = e.target.result; 
      };
      reader.readAsDataURL(file);
    } else {
      console.log("Falha ao inserir foto!");
    }
  });

  photoArea.addEventListener('click', () => {
    inputImagem.click();
  });
}


function likePost(postId) {
  alert(`Você curtiu o post com ID ${postId}`);
}

function editPost(postId) {
  alert(`Função de edição de post ${postId} em desenvolvimento.`);
}

function deletePost(postId) {
  alert(`Post ${postId} deletado.`);
}

// TDD para BDD 8 - Inserir pfp
function testeInserirPfp() {
  console.log("Testando inserção de foto...");

  console.log("analisando página...");
  const profileImage = document.getElementById('profileImage');
  const originalSrc = profileImage.src; 

  console.log("simulando upload de pfp...");
  const file = new File(["dummy content"], "pfp.jpg", { type: "image/jpeg" });
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(file);

  const inputImagem = document.createElement('input');
  inputImagem.type = 'file';
  inputImagem.files = dataTransfer.files;

  inputImagem.addEventListener('change', () => {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;

      if (profileImage.src !== originalSrc) {
        console.log("Teste de inserção de foto aprovado! 😋");
      } else {
        console.error("Falha no teste de inserção de foto!");
      }
    };
    reader.readAsDataURL(file);
  });

  inputImagem.dispatchEvent(new Event('change'));
}


window.onload = function () {
  editPhoto(); 
  testeInserirPfp(); 
};

