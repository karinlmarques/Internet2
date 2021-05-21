function limpa_formulário_cep() {
 
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('nome').value = ("");
    document.getElementById('tel').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {

        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('nome').value = (conteudo.nome);
        document.getElementById('tel').value = (conteudo.tel);
    } 
    else {

        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {


    var cep = valor.replace(/\D/g, '');

 
    if (cep !== "") {

  
        var validacep = /^[0-9]{8}$/;

  
        if (validacep.test(cep)) {

 
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";



     
            var script = document.createElement('script');

         
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

         
            document.body.appendChild(script);

        }
        else {
  
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
  
        limpa_formulário_cep();
    }
}

nome;
telefone;
rua;
bairro;
cidade;
estado;
mensagem;

function cadastra() {
    nome = document.getElementById('nome').value;
    telefone = document.getElementById('tel').value;
    rua = document.getElementById('rua').value;
    bairro = document.getElementById('bairro').value;
    cidade = document.getElementById('cidade').value;
    estado = document.getElementById('uf').value;
    mensagem = document.getElementById('mensagem').value;
    alert("Dados Cadastrados com sucesso" + " Nome: " + nome + " Telefone: " + telefone
            + " Rua: " + rua + " Bairro: " + bairro + " Cidade: " + cidade + " Estado: " + estado
            + " Mensagem: " + mensagem);
}
