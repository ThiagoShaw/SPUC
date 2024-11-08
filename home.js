/*
// Teste do BDD 3 - Gerar Post

window.onload = function testeGerarPost() {
    console.log("testando gerar post...");

    console.log("adquirindo IDs post...");
    const postInput = document.getElementById('postText');
    const postButton = document.getElementById('postButton');
    const feed = document.getElementById('post1');

    console.log("teste post post...");
    postInput.value = "testando post";
    
    console.log("iniciando evento de teste de post efetivamente...");
    postButton.addEventListener('click', () => {
        if(postInput.value.trim()){
            const newPost = document.createElement('div');
            newPost.className = 'post';
            newPost.innerHTML = postInput.value;

            feed.appendChild(newPost);
            postInput.value = "";
            console.log("teste de geração de post aprovado!")
        } else {
            console.error("falha no teste");
        }
    }) 

    postButton.click();

}  
*/

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

/*
// Teste do BDD 5 - Curtir Post
window.onload = function testeCurtirPost(){
    console.log("testando curtida de post...");
    
    const like = document.getElementById('likeButton');
    const post = document.querySelector('.post');

    console.log("verificando se o botão 'Curtir' está visível...");
    if (!like) {
        console.error("Botão 'Curtir' não encontrado!");
        return;
    }

    console.log("clicando no like...");
    like.click();

    console.log("verificando se a função 'likePost' foi chamada...");
    if (like.innerText !== "Descurtir") {
        console.error("falha no teste: o botão não mudou para 'Descurtir'");
    } else {
        console.log("teste passou: O botão foi alterado para 'Descurtir'");
    }
}
*/

function likePost(postId) {
    const post = document.getElementById(postId);
    const likeButton = post.querySelector('#likeButton');
    
    if (!likeButton) return;

    if (likeButton.innerText === "Curtir") {
        likeButton.innerText = "Descurtir";
    } else {
        likeButton.innerText = "Curtir";
    }
}

/*
// Teste do BDD 6 - Excluir Curtida
window.onload = function testeExcluirCurtida(){
    console.log("testando exclusão de curtida...");

    const like = document.getElementById('likeButton');
    const post = document.querySelector('.post');

    console.log("verificando se o botão de 'Descurtir' está visível");
    if(!like){
        console.error("botão de 'Descurtir' não encontrado!");
        return;
    }

    console.log("clicando no deslike...");
    if(like.innerText == 'Curtir'){
        like.click();
        if(like.innerText == "Descurtir"){
            console.log("clicando novamente no deslike...");
            like.click();
            if(like.innerText == "Curtir"){
                console.log("passou no teste: botão mudou para 'Curtir'");
            } else {
                console.error("falha no teste: botão não mudou para 'Curtir'");
            }
        }
    }    
}
*/

/*
// Teste do BDD 4 - Realizar o Repost
window.onload = function testeRepost() {
    console.log("testando repost...");

    const postOriginal = document.querySelector('.post');
    const repostButton = document.getElementById('repostButton');
    
    if (!postOriginal || !repostButton) {
        console.error("Post ou botão de repost não encontrados.");
        return;
    }

    repostButton.addEventListener('click', () => {
        repost(postOriginal.id); 
    });

    repostButton.click();
}
*/

// Função de repost
function repost(postId) {
    const postOriginal = document.getElementById(postId);
    
    if (!postOriginal) {
        console.error("Post original não encontrado.");
        return;
    }
    
    // Clonando o post original
    const repost = postOriginal.cloneNode(true);
    repost.classList.add('repost');  // Adiciona uma classe de repost para diferenciar

    // Remove o botão de repost do post clonado
    const repostButton = repost.querySelector('button[onclick="repost()"]');
    if (repostButton) {
        repostButton.remove();
    }

    // Adiciona o repost ao feed
    document.querySelector('.posts').appendChild(repost);
    console.log("Repost feito com sucesso!");
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

function acionarImagensPost() {
    const postImagens = document.querySelectorAll('postImage');
    postImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const postContainer = document.querySelector('.posts');
            const postImage = document.createElement('img');
            imgElement.src = URL.createObjectURL(file);
            postContainer.appendChild(postImage);
        }
    });
}

testeExcluirImagemPostTDD();
testeExcluirImagemPostTDD();


function testeExcluirImagemPostTDD() {
    const postImagenInput = document.getElementById('postImage');
    const removeImageButton = document.createElement('button');
    removeImageButton.textContent = 'Remover Imagem';
    postImageInput.insertAdjacentElement('afterend', removeImageButton);


    removeImageButton.addEventListener('click', () => {
        postImageInput.value = '';
        if(!postImageInput.value) {
            console.log("Teste passou: Imagem removida do post")
        } else {
            console.error("Falha o teste: A imagem ainda está presente")
        }
    });

    removeImageButton.click();
}

function exclurImagemPost() {
    const removeImageButton = document.createElement('button');
    removeImageButton.textContent = 'Remover Imagem';
    const postImageInput = document.getElementById('postImage');
    postImageInput.insertAdjacentElement('afterend', removeImageButton);

    removeImageButton.addEventListener('click', () => {
        postImageInput.value = '';
    });
}

testeAcionarImagemPostTDD();
acionarImagemPost();

// Função para fechar o modal
function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}
