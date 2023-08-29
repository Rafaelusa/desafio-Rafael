document.getElementById("loginForm").addEventListener("submit", function(ev){
    var telefoneInput = document.getElementById('telefone').value
    var telefoneRegex = /^\([0-9]{2}\)[0-9]{4,5}-?[0-9]{4}$/

    var senhaInput = document.getElementById('senha').value
    var senhaRegex = /^(?=.*[a-z)(?=.*[A-Z])(?=.*[!@#$%^&*()-+[\]{}|;:',.<>?~]).{8,}$/

    var numeroInput = document.getElementById('numero').value
    var numeroRegex = /^[\d]$/

    if(!telefoneRegex.test(telefoneInput)) {
        alert("Digite um E-mail válido.")
        ev.preventDefault()
    }

    if(!senhaRegex.test(senhaInput)) {
        alert("A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial, e ter no mínimo 8 caracteres.")
        ev.preventDefault()
    }

    if(!numeroRegex.test(numeroInput)) {
        alert("O campo deve ser preenchido apenas com números.")
        ev.preventDefault()
    }
})