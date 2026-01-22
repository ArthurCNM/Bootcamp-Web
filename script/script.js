function adicionarNome() {
    let inputNome = document.getElementById("inputNome");
    let inputPosicao = document.getElementById("inputPosicao");
    let inputDataNascimento = document.getElementById("inputDataNascimento");
    let nome = inputNome.value.trim(); //evita input vazio
    let posicao = inputPosicao.value.trim();
    let dataNascimento = inputDataNascimento.value;
     
    if (nome === "" || posicao === "" || dataNascimento === "") {
        alert("Por favor, preencha todos os campos");
        return;
    }

    // Calcular a idade
    let [ano, mes, dia] = dataNascimento.split('-').map(Number);
    let hoje = new Date();

    if (new Date(ano, mes - 1, dia) > hoje) {
        alert("A data de nascimento é inválida");
        return;
    }

    let idade = hoje.getFullYear() - ano;
    if (hoje.getMonth() + 1 < mes || (hoje.getMonth() + 1 === mes && hoje.getDate() < dia)) {
        idade--;
    }

    // Selecionar a lista
    let listaNomes = document.getElementById("listaNomes");
    
    // Criar o item da lista
    let novoNome = document.createElement("li");
    novoNome.textContent = `${nome} - ${posicao} - (${idade} anos)`;
    novoNome.className = "list-group-item d-flex justify-content-between align-items-center";
    
    // Adicionar na lista
    listaNomes.appendChild(novoNome);

    // Exibir mensagem de sucesso
    let campoMensagem = document.getElementById("mensagem");
    campoMensagem.textContent = `✅ ${nome} foi adicionado com sucesso!`;

    // Limpar input
    inputNome.value = "";
    inputPosicao.value = "";
    inputDataNascimento.value = "";
    inputNome.focus();

    // Limpar a mensagem
    setTimeout(() => {
        campoMensagem.textContent = "";
    }, 3000);
}