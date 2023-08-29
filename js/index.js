$(function(){
    
    const controller = new Controller();
    
    controller.inicializar();

})

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}
  
const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value  
}

const nameInput = document.getElementById('nome').value;
const telefoneInput = document.getElementById('telefone').value;
const senhaInput = document.getElementById('senha').value;
const numeroInput = document.getElementById('numero').value;
const nameSisInput = document.getElementById('nomeSistema').value;
const numRequisition = document.getElementById('numero').value;


form.addEventListener('submit', ev => {
    ev.preventDefault();

    validateInputs();

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.add('success');
    }
    
    /*var telefoneRegex = /^\([0-9]{2}\)[0-9]{4,5}-?[0-9]{4}$/

    
    var senhaRegex = /^(?=.*[a-z)(?=.*[A-Z])(?=.*[!@#$%^&*()-+[\]{}|;:',.<>?~]).{8,}$/

    
    var numeroRegex = /^[\d]$/

    if(!telefoneRegex.test(telefoneInput)) {
        alert("Digite um telefone válido.")
        ev.preventDefault()
    }

    if(!senhaRegex.test(senhaInput)) {
        alert("A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial, e ter no mínimo 8 caracteres.")
        ev.preventDefault()
    }

    if(!numeroRegex.test(numeroInput)) {
        alert("O campo deve ser preenchido apenas com números.")
        ev.preventDefault()
    }*/
});

const validateInputs = () => {
    const nameValue = nameInput.value.trim();
    const telefoneValue = telefoneInput.trim();
    const senhaValue = senhaInput.trim();
    const numberValue = numberInput.trim();
    const nameSisValue = nameSisInput.trim();
    const numReqValue = numRequisition.trim();

    if(nameValue === ""){
        setError(nameInput, "Digite seu nome.")
    }
};

$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});