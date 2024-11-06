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