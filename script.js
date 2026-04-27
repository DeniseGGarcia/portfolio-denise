// Selecionando o formulário
const form = document.getElementById('formContato');

form.addEventListener('submit', function(event) {
    // Impede o envio para validar antes
    event.preventDefault();

    // Pegando os valores
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação de campos vazios 
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação de formato de e-mail 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Simulação de envio com sucesso 
    alert('Mensagem enviada com sucesso!');
    form.reset(); // Limpa os campos
});

// --- LÓGICA DE ALTERNAR TEMA ---
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    // Adiciona ou remove a classe 'dark-mode' do corpo do site
    document.body.classList.toggle('dark-mode');
    
    // Pequeno feedback visual no botão
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        btnTema.textContent = '🌑 Modo Escuro';
    }
});

