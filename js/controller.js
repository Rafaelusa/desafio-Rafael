class Controller {

    inicializar(){
        this.preencherComboAreas();
    }


    preencherComboAreas(){
        
        const share = new Share();

        for(let area of share.areas){

            const option = $('<option></option>');
            option.attr({value: area.valor}).text(area.descricao);

            $('#area').append(option);

        }

    }

    validarCamposObrigatorios(){

        const validacao = [];
        let mensagem = "Preencha os seguintes campos: \n\n";
        let mensagemSenha = "A senha precisa conter 8 digitos no mínimo."

        //card-Usuário
        const inputNome = $("#nome").val();
        const inputNascimento = $("#datadeNascimento").val();
        const inputTelefone = $("#telefone").val();
        const inputArea = $("#area").val();
        const inputSenha = $("#senha").val();
        
        //Nome vazio
        if(inputNome === ""){
            validacao.push("Nome do Usuário");
        }      

        //Data de Nascimento Vazia
        if(inputNascimento === ""){
            validacao.push("Data de Nascimento");
        }

        //Telefone Vazio
        if(inputTelefone === "") {
            validacao.push("Telefone");
        }

        //Área Vazia
        if(inputArea === ""){
            validacao.push("Área");
        }
        
        //Senha Vazia
        if(inputSenha === "") {
            validacao.push("Senha");
        }

        //Validando Senha
        if(!senhaValida(inputSenha, 8)) {
            alert(mensagemSenha)
            return;
        }
        //card-Sistema
        const inputNomeSistema = $("#nome2").val();
        const inputNumero = $("#numero").val();
        const inputDescricao = $("#description").val();

        //Nome do Sistema Vazio
        if(inputNomeSistema === ""){
            validacao.push("Nome do Sistema");
        }
  
        //Numero de Requisições Vazio
        if(inputNumero === ""){
            validacao.push("Nº Requisições");
        }

        //Descrição Vazia
        if(inputDescricao === ""){
            validacao.push("Descrição");
        }

        for (let item of validacao){
            mensagem += item + "\n";
        }

        if(validacao.length > 0){
            alert(mensagem);
            return false;
        }
            return true;

        //$("#sadasda").val();

        // Usar if
        // Se o campo estiver vazio, adicionar a seguinte mensagem no array:
        /// "[Nome do campo]"


        /*
        for(let item of validacao){

        }
        */

    }
}

function senhaValida(senha, minDigitos) {
    if(senha.length >= minDigitos) {
        return true;
    }
    
    return false;

}


const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
}

  const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
};