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

}