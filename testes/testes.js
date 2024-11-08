// Teste do BDD 1 - Cadastro de usuário

function testeCadastro() {
    console.log("testando cadastro...");

    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password');
    const form = document.getElementById('signupForm');


    emailInput.value = 'email.teste@pucpr.edu.br';
    senhaInput.value = 'senha123456';

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if(emailInput.value && senhaInput.value){
            console.log("usuário cadastrado com sucesso! 🤗");

            window.location.href = "\login.html";
        } else {
            console.error("falha no teste");
        }
    })

    document.getElementById('signupButton').click();

}

testeCadastro();


// Teste do BDD 2 - Login de usuário

function testeLogin() {
    console.log("testando login...");

    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password');
    const form = document.getElementById('loginForm');

    emailInput.value = 'email.teste@pucpr.edu.br';
    senhaInput.value = 'senha123456';

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if(emailInput.value && senhaInput.value){
            console.log("usuário logado com sucesso! 😀");

            window.location.href = '\home_page\home.html';
        } else {
            console.error("falha no teste");
        }
    })

    document.getElementById('loginButton').click();

}

testeLogin();

// Teste do BDD 3 - Gerar Post

function testeGerarPost() {
    console.log("testando gerar post...");

    const postInput = document.getElementById('');
    const postButton = docuemtn.getElementById('postButton');
    const feed = document.getElementById('post1');

    postInput.value = "testando post";
    
    postButton.addEventListener('click', () => {
        if(postInput.value.trim()){
            const newPost = document.createElement('div');
            newPost.className = 'post';
            newPost.innerHTML = postInput.value;

            feed.appendChild(newPost);
            postInput.value = "";
        } else {
            console.error("falha no teste");
        }
    }) 

    postButton.click();

}

testeGerarPost();

// Teste do BDD 4 - Realizar o Repost

function testeRepost() {
    console.log("testando repost...");

    const postOriginal = document.querySelector('post');
    const repostButton = postOriginal.querySelector('.repostButton');
    const feed = document.getElementById('post1');

    repostButton.addEventListener('click', () => {
        const repost = postOriginal.cloneNode(ture);
        
        repost.querySelector('.repostButton').remove();
        repost.classList.addd('repost');

        feed.appendChild(repost);
    })

    repostButton.click();

}

testeRepost();

// Teste do BDD 5 - Curtir Post

function testeCurtirPost() {
    console.log("testando curtir post...");

    const post = document.querySelector('.post');
    const likeButton = post.querySelector('.likeButton');
    const likeCount = post.querySelector('.likeCount');

    likeButton.addEventListener('click', () => {
        let count = parseInt(likeCount.textContent);
        count++;
        likeCount.textContent = '${count} curtidas';

    })

    likeButton.click();

}
testeCurtirPost();


// Teste do BDD 9 - Adicionar Imagem no Post

function testeAdicionarImagemNoPost() {
    console.log("testando adição de imagem no post...");

    // Seleciona os elementos necessários para o teste
    const postInput = document.getElementById('postText');
    const postImageInput = document.getElementById('postImage');
    const postButton = document.getElementById('postButton');
    const feed = document.querySelector('.posts');

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

        if (newPost && newPost.querySelector('img')) {
            console.log("teste de adição de imagem no post aprovado! ✅");
        } else {
            console.error("falha no teste: imagem não foi adicionada ao post ❌");
        }
    });

    // Simula o clique no botão de postar
    postButton.click();
}

testeAdicionarImagemNoPost();


 // teste TDD 10 - Excluir imagem do post
// Função para testar a exclusão da imagem de um post
function testeExcluirImagemDoPost() {
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

                // Remove a imagem do post
                img.remove();

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


