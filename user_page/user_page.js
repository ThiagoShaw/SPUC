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
  alert("Funcionalidade de edição de foto em breve.");
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
