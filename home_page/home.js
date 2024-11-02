document.getElementById('postForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const postText = document.getElementById('postText').value;
    const postImage = document.getElementById('postImage').files[0];

    if (postText.trim() === '') {
        alert('Por favor, escreva um comentário.');
        return;
    }

    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.id = `post${Date.now()}`; // Gera um ID único para o novo post

    // Adiciona conteúdo ao novo post
    newPost.innerHTML = `
        ${postImage ? `<img src="${URL.createObjectURL(postImage)}" alt="Imagem do Post">` : ''}
        <p>${postText}</p>
        <button onclick="likePost()">Curtir</button>
        <button onclick="repost()">Repostar</button>
        <button onclick="editPost('${newPost.id}')">Editar</button>
        <button onclick="deletePost('${newPost.id}')">Deletar</button>
        <div class="comments">
            <p><strong>Usuário:</strong> Comentário inicial</p>
        </div>
    `;

    // Adiciona o novo post à lista de posts
    document.querySelector('.posts').appendChild(newPost);

    // Limpa o formulário após a publicação
    document.getElementById('postForm').reset();
    alert('Postagem publicada com sucesso!');
});

function likePost() {
    alert('Você curtiu este post!');
}

function repost() {
    alert('Postagem repostada com sucesso!');
}

function editPhoto() {
    alert('Funcionalidade de editar foto em desenvolvimento.');
}

function openSettings() {
    alert('Abrindo configurações...');
}

// Função para deletar um post
function deletePost(postId) {
    const postElement = document.getElementById(postId);
    if (postElement) {
        postElement.remove();
        alert('Postagem deletada com sucesso!');
    } else {
        alert('Erro: Postagem não encontrada.');
    }
}

// Função para abrir o modal de edição
function editPost(postId) {
    const postElement = document.getElementById(postId);
    if (postElement) {
        const modal = document.getElementById('editModal');
        const editTextarea = document.getElementById('editTextarea');
        
        // Popula o textarea com o conteúdo atual do post
        editTextarea.value = postElement.querySelector('p').textContent;
        modal.style.display = 'block';

        // Adiciona evento ao botão de salvar com escopo correto
        document.getElementById('saveEdit').onclick = function() {
            postElement.querySelector('p').textContent = editTextarea.value;
            modal.style.display = 'none';
            alert('Postagem editada com sucesso!');
        };
    } else {
        alert('Erro: Postagem não encontrada.');
    }
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}
