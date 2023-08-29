class Controller {
    
    inicializar(){
        //inicializar a página
        this.preencherComboArea();
    }

    preencherComboArea(){

        const share = new Share();

        for(let area of share.areas){
            
            if(area.valor !== "lixo"){

                const option = $("<option></option>");
                option.attr({value: area.valor});
                option.text(area.descricao);
        
                $('#area').append(option);

            }
            
        }
        
    }

    enviar(){
        //validar campos vazios
        //validar formatos de data e telefone
        //Se tudo der certo, mostrar um ok na tela.
        //bootbox component.
    }

}
