document.getElementById('postForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
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

// Alternância de tema claro/escuro
const themeToggleBtn = document.createElement('button');
themeToggleBtn.textContent = 'Alternar Tema';
themeToggleBtn.classList.add('theme-toggle');
document.querySelector('.navbar').appendChild(themeToggleBtn);

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Tema Claro' : 'Tema Escuro';
});
