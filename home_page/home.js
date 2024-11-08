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

/*
// Teste do BDD 9 - Adicionar Imagem no Post

window.onload = function testeAdicionarImagemNoPost() {
    console.log("testando adição de imagem no post...");

    // Seleciona os elementos necessários para o teste
    const postInput = document.getElementById('postText');
    const postImageInput = document.getElementById('postImage');
    const postButton = document.getElementById('postButton');
    const feed = document.querySelector('.posts');

    // Verifica se o input de imagem foi encontrado
    if (!postImageInput) {
        console.error("Erro: o elemento de entrada de imagem (postImage) não foi encontrado.");
        return; // Interrompe a execução do teste caso o elemento não exista
    }

    // Define um valor de texto para o post
    postInput.value = "testando imagem no post";

    // Cria um arquivo de imagem simulado (fake image file)
    const fakeImage = new File(["fake content"], "fake-image.jpg", { type: "image/jpeg" });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(fakeImage);
    postImageInput.files = dataTransfer.files;

    // Adiciona evento de clique no botão de postagem para verificar a criação do post
    postButton.addEventListener('click', () => {
        const newPost = document.querySelector('.post');
        if (newPost) {
            const img = newPost.querySelector('img');
            if (img) {
                console.log("teste de adição de imagem no post aprovado! ✅");
            } else {
                console.error("falha no teste: imagem não foi adicionada ao post ❌");
            }
        } else {
            console.error("falha no teste: post não foi criado ❌");
        }
    });

    // Simula o clique no botão de postar
    postButton.click();
}

testeAdicionarImagemNoPost();
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
    const postId = `post${Date.now()}`;
    newPost.id = postId;

    // O código abaixo irá exibir a imagem se o postImage estiver definido
    newPost.innerHTML = `
        ${postImage ? `<img src="${URL.createObjectURL(postImage)}" alt="Imagem do Post">` : ''}
        <p>${postText}</p>
        <div class="comments">
            <p><strong>Usuário:</strong> Comentário inicial</p>
        </div>
    `;

    document.querySelector('.posts').appendChild(newPost);
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

let likeCount = 0;

function likePost(postId) {
    const post = document.getElementById(postId);
    const likeButton = post.querySelector('button');
    
    if (likeButton.innerText === "Curtir") {
        likeButton.innerText = "Descurtir";
        likeButton.style.color = "red";
        likeCount++;
    } else {
        likeButton.innerText = "Curtir";
        likeButton.style.color = "white";
        likeCount--;
    }

    document.getElementById('likeCount').textContent = likeCount;
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



// Função corrigida para passar no teste
function removerImagem(postId) {
    const postElement = document.getElementById(postId);

    // Verifica se o post existe
    if (!postElement) {
        console.error("Post não encontrado!");
        return;
    }

    const imageElement = postElement.querySelector('img');

    // Verifica se a imagem existe no post
    if (imageElement) {
        imageElement.remove();  // Remover a imagem corretamente
        console.log("teste de exclusão de imagem no post aprovado!");
    } else {
        console.error("falha no teste: nenhuma imagem encontrada para remover ");
    }
}


// Função para fechar o modal
function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}


// Função para remover a imagem de um post
function removeImage(postId) {
    const postElement = document.getElementById(postId);

    // Verifica se o post existe
    if (!postElement) {
        console.error("Post não encontrado!");
        return;
    }

    const imageElement = postElement.querySelector('img');

    // Verifica se a imagem existe no post
    if (imageElement) {
        imageElement.remove(); // Remove a imagem
        console.log("Imagem removida com sucesso!");
    } else {
        console.error("Nenhuma imagem encontrada para remover.");
    }
}

//Teste TDD 10 - Excluir imagem do post
window.onload = function testeExcluirImagemDoPost() {
    console.log("testando exclusão de imagem no post...");

    // Seleciona os elementos necessários para o teste
    const postInput = document.getElementById('postText');
    const postImageInput = document.getElementById('postImage');
    const postButton = document.getElementById('postButton');
    const feed = document.querySelector('.posts');

    // Verifica se o input de imagem foi encontrado
    if (!postImageInput) {
        console.error("Erro: o elemento de entrada de imagem (postImage) não foi encontrado no DOM.");
        return; // Interrompe a execução do teste caso o elemento não exista
    }

    // Define um valor de texto para o post
    postInput.value = "testando excluir imagem no post";

    // Cria um arquivo de imagem simulado (fake image file)
    const fakeImage = new File(["fake content"], "fake-image.jpg", { type: "image/jpeg" });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(fakeImage);
    postImageInput.files = dataTransfer.files;

    // Adiciona evento de clique no botão de postagem para verificar a criação do post
    postButton.addEventListener('click', () => {
        const newPost = document.querySelector('.post');
        
        if (newPost) {
            // Verifica se a imagem foi adicionada ao post
            const img = newPost.querySelector('img');
            if (img) {
                console.log("Imagem adicionada ao post. Agora excluindo a imagem...");



                // Verifica se a imagem foi realmente removida
                if (!newPost.querySelector('img')) {
                    console.log("teste de exclusão de imagem no post aprovado! ✅");
                } else {
                    console.error("falha no teste: a imagem não foi removida do post ❌");
                }
            } else {
                console.error("falha no teste: imagem não foi adicionada ao post para exclusão ❌");
            }
        } else {
            console.error("falha no teste: post não foi criado ❌");
        }
    });

    // Simula o clique no botão de postar
    postButton.click();
}

testeExcluirImagemDoPost();


